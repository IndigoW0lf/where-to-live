import pandas as pd
from flask import Blueprint, jsonify

main = Blueprint("main", __name__)


@main.route("/data")
def get_data():
    # Assuming 'data.csv' is in the 'backend/data' directory
    df = pd.read_csv("backend/data/data.csv")

    # Transform DataFrame to desired format
    transformed_data = df[
        [
            "Category",
            "Kailua, Hawaii",
            "Columbia, Missouri",
            "Sacramento, California",
            "Portland, Oregon",
            "Charlotte, North Carolina",
            "Seattle, Washington",
        ]
    ].melt(id_vars=["Category"], var_name="City", value_name="Population")

    # Convert transformed DataFrame to JSON
    return jsonify(transformed_data.to_dict(orient="records"))


@main.route("/population_data")
def population_data():
    df = pd.read_csv("path/to/your/data.csv")
    population_data = df.loc["Population Estimates, July 1, 2022, (V2022)"].to_dict()
    return jsonify(population_data)
