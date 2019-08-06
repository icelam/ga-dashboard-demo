from flask import Flask
from flask_cors import CORS

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')
app.config.from_pyfile('config.py')

CORS(app)

from app import generateToken
app.register_blueprint(generateToken.bp)