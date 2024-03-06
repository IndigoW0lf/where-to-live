from flask import Blueprint, jsonify
import json
import os

main = Blueprint("main", __name__)


@main.route("/data")
def get_data():
    path = os.path.join(os.path.dirname(__file__), "..", "data", "data.json")
    with open(path, "r") as file:
        data = json.load(file)
    return jsonify(data)
