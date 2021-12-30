from flask import Blueprint, request, jsonify
from flask_jwt_extended import (create_access_token, jwt_required,
                                get_jwt, get_jwt_identity,
                                create_refresh_token)

from models import db, Users


users = Blueprint('users', __name__)


@users.route("/auth", methods=["POST"])
def auth():
    data = request.json
    email = data.get("email", None)
    password = data.get("password", None)
    user = Users.query.filter(Users.email == email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    add_c = {"id": user.id}
    access_token = create_access_token(email,
                                       additional_claims=add_c)
    refresh_token = create_refresh_token(user.id)
    return jsonify(access_token=access_token,
                   username=user.username,
                   refresh_token=refresh_token)


@users.route("/reg", methods=["POST"])
def reg():
    data = request.json
    username = data.get("username", None)
    email = data.get("email", None)
    password = data.get("password", None)
    if username and email and password:
        user = Users(username=username,
                     email=email,
                     password=password)
        db.session.add(user)
        db.session.commit()
        add_c = {"id": user.id}
        access_token = create_access_token(email,
                                           additional_claims=add_c)
        return jsonify(access_token=access_token,
                       username=username)


@users.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    additional_claims = {"id": current_user}
    new_token = create_access_token(identity=current_user,
                                    additional_claims=additional_claims)
    new_refresh_token = create_access_token(identity=current_user)
    return {'access_token': new_token, 'refresh_token': new_refresh_token}, 200


@users.route("/info", methods=["GET"])
@jwt_required()
def info():
    user_id = get_jwt().get('id')
    user = Users.query.filter(Users.id == user_id).first()
    return jsonify(username=user.username)
