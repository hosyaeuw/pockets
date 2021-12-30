from flask import Blueprint, request
from models import db, Widgets, Colors, Transactions, Categories
from flask_restful import Api, Resource
from sqlalchemy.sql import func
from flask_jwt_extended import get_jwt, jwt_required
import time

from utils.DateHelper import DateHelper as d


widgets = Blueprint('widgets', __name__)
api = Api(widgets)


class WidgetList(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt().get('id')
        args = request.args
        date = args.get('date')
        covert_date = d.convert_timestamp_to_date(str(int(date) + 86400000))
        q = db.session.query(func.sum(
            Transactions.amount).label('sum_amount'), Widgets).join(
            Categories, Categories.id == Transactions.category_id).join(
            Widgets, Widgets.category_id == Categories.id
            ).where(Categories.user_id == user_id).filter(
            Widgets.created_at <= covert_date, 
            covert_date <= Widgets.expire_at).group_by(Widgets.id)
        return {
            'result': [{
                'id': widget.id,
                'color': widget.colors.value,
                'limit': widget.limit,
                'transactions_sum': amount,
                "period": widget.period,
                'created_at': time.mktime(widget.created_at.timetuple()),
                'expire_at': time.mktime(widget.expire_at.timetuple()),
                'is_more': widget.is_more,
                'category': {
                    'id': widget.categories.id,
                    'name': widget.categories.name,
                }
            } for amount, widget in q.all()]}

    @jwt_required()
    def post(self):
        data = request.get_json(force=True)
        category_id = data.get('category_id')
        limit = data.get('limit')
        period = data.get('period')
        color_id = data.get('color_id')
        expire_at = data.get('expire_at')
        is_more = data.get('is_more', False)
        covert_date = d.convert_timestamp_to_date(expire_at)
        widget = Widgets(limit=limit,
                         period=period,
                         category_id=category_id,
                         color_id=color_id,
                         is_more=is_more,
                         expire_at=covert_date)
        db.session.add(widget)
        db.session.commit()
        return {'success': True, 'id': widget.id}, 200


class Widget(Resource):
    def delete(self, id):
        widget = Widgets.query.filter(Widgets.id == id).first()
        db.session.delete(widget)
        db.session.commit()
        return {'id': id}


class WidgetColors(Resource):
    def get(self):
        colors = Colors.query.all()
        return {'result': [{
            'id': color.id,
            'value': color.value,
        } for color in colors]}


api.add_resource(WidgetList, '/widgets/')
api.add_resource(WidgetColors, '/widgets/colors/')
api.add_resource(Widget, '/widgets/<id>/')
