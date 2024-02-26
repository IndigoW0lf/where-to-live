import pandas as pd
from flask import Blueprint, jsonify

main = Blueprint("main", __name__)


@main.route("/data")
def get_data():
    df = pd.read_csv("backend/data/data.csv")
    transformed_data = df.melt(
        id_vars=["Category"], var_name="City", value_name="Value"
    )
    return jsonify(transformed_data.to_dict(orient="records"))
