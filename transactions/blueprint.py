from flask import Blueprint, request
from flask_restful import Api, Resource
from sqlalchemy.sql import func
from flask_jwt_extended import get_jwt, jwt_required

import time

from utils.DateHelper import DateHelper as d
from models import db, Transactions, Categories


transactions = Blueprint('transactions', __name__)
api = Api(transactions)


class TransactionList(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt().get('id')
        args = request.args
        # offset = int(args.get('offset', 1))
        # limit = int(args.get('limit', 20))
        start_date = args.get('start_date', 1605021641073)
        end_date = args.get('end_date', 1636557641073)
        start_covert_date = d.convert_timestamp_to_date(start_date)
        formated_end_date = str(int(end_date) + 86400000)
        end_covert_date = d.convert_timestamp_to_date(formated_end_date)
        transactions = Transactions.query.where(
                       Categories.id == Transactions.category_id).filter(
                       Transactions.date.between(
                                                 start_covert_date,
                                                 end_covert_date),
                                                 Categories.user_id == user_id
                                                 ).order_by(
                                                 Transactions.date.desc())
        return {'success': True, 'result': [{
            'id': transaction.id,
            'amount': transaction.amount,
            'transaction_date': time.mktime(transaction.date.timetuple()),
            'category': {
                    'id': transaction.categories.id,
                    'name': transaction.categories.name,
                    'is_income': transaction.categories.is_income,
                }
            } for transaction in transactions.all()]}

    @jwt_required()
    def post(self):
        data = request.get_json(force=True)
        category_id = data.get('category_id')
        transaction_date = data.get('transaction_date')
        amount = data.get('amount')
        date = d.convert_timestamp_to_date(transaction_date)
        if category_id and transaction_date and amount:
            category = Categories.query.filter(
                                                Categories.id == category_id
                                               ).first()
            transaction = Transactions(amount=amount,
                                       date=date)
            transaction.categories = category
            db.session.add(transaction)
            db.session.commit()
            return {'success': True, 'id': transaction.id}


class Transaction(Resource):
    def put(self, id):
        data = request.get_json(force=True)
        category_id = data.get('category_id')
        transaction_date = data.get('transaction_date')
        amount = int(data.get('amount'))
        date = d.convert_timestamp_to_date(transaction_date)
        if category_id and transaction_date and amount:
            data = {
                'amount': amount,
                'date': date,
                'category_id': category_id
            }
            q = Transactions.query.filter(Transactions.id == id)
            q.update(data)
            db.session.commit()
            transaction = q.first()
            return {'success': True,
                    'result': {
                        'id': transaction.id,
                        'amount': transaction.amount,
                        'transaction_date': time.mktime(
                                            transaction.date.timetuple()),
                        'category': {
                            'id': transaction.categories.id,
                            'name': transaction.categories.name,
                            'is_income': transaction.categories.is_income
                        }
                    }}

    def delete(self, id):
        Transactions.query.filter(Transactions.id == id).delete()
        db.session.commit()
        return {'success': True}


class TransactionGlobal(Resource):
    names = {
        True: 'Доход',
        False: 'Расход'
    }

    @jwt_required()
    def get(self):
        user_id = get_jwt().get('id')
        args = request.args
        start_date = args.get('start_date', 1605021641073)
        end_date = args.get('end_date', 1636557641073)
        start_covert_date = d.convert_timestamp_to_date(start_date)
        formated_end_date = str(int(end_date) + 86400000)
        end_covert_date = d.convert_timestamp_to_date(formated_end_date)
        q = db.session.query(func.sum(
            Transactions.amount).label('sum_amount'),
            Categories.is_income).where(
            Categories.id == Transactions.category_id
            ).filter(
            Transactions.date.between(start_covert_date,
                                      end_covert_date),
            Categories.user_id == user_id
            ).group_by(Categories.is_income).order_by(
            func.sum(Transactions.amount).desc()).all()
        return {'success': True, 'result': [{
            'amount': amount,
            'name': self.names[is_income],
        } for amount, is_income in q]}


api.add_resource(TransactionList, '/transactions/')
api.add_resource(Transaction, '/transactions/<id>/')
api.add_resource(TransactionGlobal, '/transactions/global/')
