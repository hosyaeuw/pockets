from flask import Blueprint, request
from flask_restful import Api, Resource
from sqlalchemy.sql import func
from flask_jwt_extended import get_jwt, jwt_required

from models import db, Categories, Transactions
from utils.DateHelper import DateHelper as d


categories = Blueprint('categories', __name__)
api = Api(categories)


class CategoryList(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt().get('id')
        categories = Categories.query.filter(Categories.user_id == user_id)
        return {'success': True, 'result': [{
            'id': category.id,
            'name': category.name,
            'is_income': category.is_income
        } for category in categories.all()]}

    @jwt_required()
    def post(self):
        user_id = get_jwt().get('id')
        args = request.get_json(force=True)
        name = args.get('name')
        is_income = args.get('is_income', True)
        if name:
            category = Categories(name=name.lower(),
                                  is_income=is_income,
                                  user_id=user_id)
            db.session.add(category)
            db.session.commit()
            return {'success': True, 'id': category.id}, 200
        return {'success': False}, 400


class TransactionsByCategories(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt().get('id')
        args = request.args
        start_date = args.get('start_date', 1605021641073)
        end_date = args.get('end_date', 1636557641073)
        start_covert_date = d.convert_timestamp_to_date(start_date)
        formated_end_date = str(int(end_date) + 86400000)
        end_covert_date = d.convert_timestamp_to_date(formated_end_date)
        q = db.session.query(Categories.id, Categories.name, func.sum(
            Transactions.amount).label('sum_amount'),
            Categories.is_income).where(
            Categories.id == Transactions.category_id).filter(
            Transactions.date.between(start_covert_date, end_covert_date),
            Categories.user_id == user_id
            ).group_by(Categories.id)
        return {'success': True,
                'result': [{
                    "id": c_id,
                    "name": c_name,
                    "is_income": is_income,
                    "transactions_sum": total_amount
                } for c_id, c_name, total_amount, is_income in q.all()]}


api.add_resource(CategoryList, '/categories/')
api.add_resource(TransactionsByCategories,
                 '/categories/transactions_by_categories/')
