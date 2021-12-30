from app import app
from transactions.blueprint import transactions
from categories.blueprint import categories
from widgets.blueprint import widgets
from users.blueprint import users

app.register_blueprint(categories, url_prefix='/api')
app.register_blueprint(transactions, url_prefix='/api')
app.register_blueprint(widgets, url_prefix='/api')
app.register_blueprint(users, url_prefix='/user/')


if __name__ == '__main__':
    app.run()
