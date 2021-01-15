from flask import Flask, render_template, jsonify, request
from random import randint
from helpers import *
import requests

app = Flask(__name__)

BASE_API_URL = 'http://numbersapi.com/'

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=['POST'])
def get_lucky_num():
    userData = data_to_dict(request.json)
    
    if 'error' in userData:
        return jsonify(userData)
    else:
        ran_num = randint(1, 100)

        res_year = requests.get(f'{BASE_API_URL}{userData["year"]}/year?json')
        res_number = requests.get(f'{BASE_API_URL}{ran_num}/math?json')

        return jsonify(serialize(res_year.json(), res_number.json()))