from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/test')
def test_route():
    return jsonify({"message": "Backend is up and running!"})