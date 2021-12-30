from flask import Flask, render_template, redirect
from config import Configuration
from flask_sqlalchemy import SQLAlchemy

from flask_jwt_extended import JWTManager, jwt_required, verify_jwt_in_request

app = Flask(__name__)
app.config.from_object(Configuration)

db = SQLAlchemy(app)


@app.route('/', defaults={'u_path': ''})
@app.route('/<path:u_path>')
def index(u_path):
    return render_template('index.html')


# JWT
jwt = JWTManager(app)

# ADMIN
from models import Colors, Widgets, Transactions, Categories
from flask_admin import Admin, AdminIndexView
from flask_admin.contrib.sqla import ModelView


class AdminMixin:
	def is_accessible(self, **kwargs):
		print(self._template_args)
		return True

	def inaccessible_callback(self, name):
		return redirect("/auth", code=302)


class AdminView(AdminMixin, ModelView):
	pass


class HomeView(AdminMixin, AdminIndexView):
	pass


admin = Admin(app, 'Pockets', url="/", index_view=HomeView(name="Home"))
admin.add_view(AdminView(Colors, db.session))
admin.add_view(AdminView(Widgets, db.session, endpoint="widgets_"))
admin.add_view(AdminView(Transactions, db.session, endpoint="transactions_"))
admin.add_view(AdminView(Categories, db.session, endpoint="categories_"))
