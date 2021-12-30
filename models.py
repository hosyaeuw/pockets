from app import db
from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash


class Colors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.String(7), nullable=False)

    def __init__(self, **kwargs):
        super(Colors, self).__init__(**kwargs)

    def __repr__(self):
        return self.value


class Widgets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    limit = db.Column(db.Integer, nullable=False)
    period = db.Column(db.String(255), nullable=False)
    is_more = db.Column(db.Boolean, nullable=False, default=True)
    created_at = db.Column(db.DateTime, default=datetime.now())
    expire_at = db.Column(db.DateTime, default=datetime.now())

    category_id = db.Column(db.Integer,
                            db.ForeignKey('categories.id'), nullable=False)

    color_id = db.Column(db.Integer,
                         db.ForeignKey('colors.id'), nullable=False)

    colors = db.relationship('Colors',
                             backref=db.backref('widgets', lazy=True))

    def __init__(self, **kwargs):
        super(Widgets, self).__init__(**kwargs)

    def __repr__(self):
        return f'{self.limit}'


class Transactions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, default=datetime.now())

    category_id = db.Column(db.Integer,
                            db.ForeignKey('categories.id'), nullable=False)

    def __init__(self, **kwargs):
        super(Transactions, self).__init__(**kwargs)

    def __repr__(self):
        return f'{self.date} {self.amount} {self.category_id}'


class Categories(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)

    is_income = db.Column(db.Boolean, nullable=False, default=True)

    user_id = db.Column(db.Integer,
                        db.ForeignKey('users.id'), nullable=False)

    transactions = db.relationship('Transactions',
                                   backref=db.backref('categories', lazy=True))

    widgets = db.relationship('Widgets',
                              backref=db.backref('categories', lazy=True))

    def __init__(self, **kwargs):
        super(Categories, self).__init__(**kwargs)

    def __repr__(self):
        return self.name


roles_users = db.Table('roles_users',
                       db.Column('user_id', db.Integer,
                                 db.ForeignKey('users.id')),
                       db.Column('role_id', db.Integer,
                                 db.ForeignKey('role.id')))


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))

    roles = db.relationship('Role',
                            backref=db.backref('user', lazy=True),
                            secondary=roles_users)

    def __init__(self, *args, **kwargs):
        super(Users, self).__init__(**kwargs)
        self.set_password()

    def set_password(self):
        self.password = generate_password_hash(self.password.strip())

    def check_password(self, password):
        return check_password_hash(self.password, password.strip())


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True)
    description = db.Column(db.String(255))

    def __init__(self, *args, **kwargs):
        super(Role, self).__init__(**kwargs)
        self.set_password()
