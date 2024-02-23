from flask import Flask, render_template, jsonify, request
from dotenv import load_dotenv
import os
import datetime
import requests
from urllib.parse import quote

app = Flask(__name__)
load_dotenv()

class SearchChar:
    @staticmethod
    @app.route('/default_set', methods=['GET'])
    def test():
        maple_api = os.environ.get('maple_api')
        name = request.args.get('character_name', '')
        headers = {"x-nxopen-api-key": maple_api}
        character_name = quote(name)
        url = f"https://open.api.nexon.com/maplestory/v1/id?character_name={character_name}"

        response = requests.get(url, headers=headers)

        return jsonify(response.json())

    @staticmethod
    @app.route('/symbol_result', methods=['GET'])
    def symbol_result():
        maple_api = os.environ.get('maple_api')
        ocid = request.args.get('ocid', '')
        print(ocid)

        headers = {"x-nxopen-api-key": maple_api}

        d = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))
        one_day_ago = d - datetime.timedelta(days=1)
        date = one_day_ago.strftime("%Y-%m-%d")
        print(date)

        url = f"https://open.api.nexon.com/maplestory/v1/character/symbol-equipment?ocid={ocid}&date={date}"
        response = requests.get(url, headers=headers)

        return jsonify(response.json())

    @staticmethod
    @app.route('/symbol_char', methods=['POST'])
    def symbol_post():
        data = request.json
        character_class = data.get('character_class')
        symbol=data.get('symbol')
        return jsonify({'character_class':character_class,'symbol':symbol})
class cal_day:
    @staticmethod
    @app.route('/dailyquest',methods=['POST'])
    def symbol_cal():
        data=request.json
        value=data.get('value')
        symbol=data.get('symbol')
        return jsonify({'value':value,'symbol':symbol})

@app.route('/')
def home():
    return render_template('footer.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
