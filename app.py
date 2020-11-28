from flask import Flask, render_template
import pandas as pd
import json

import os

app = Flask(__name__)


@app.route('/')
@app.route('/index')
# @app.route('/index.html')
def index():
    return json.dumps({'test': 'test'})


if __name__ == '__main__':
    app.run(debug=True)
