import json
import os
from flask import Blueprint, jsonify, current_app as app
from os import path
from oauth2client.service_account import ServiceAccountCredentials

bp = Blueprint("generateToken", __name__)

# The scope for the OAuth2 request.
SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'

# Defines a method to get an access token from the ServiceAccount object.
@bp.route("/v1/token")
def get_access_token():
  # Service Account Credentials
  CREDENTIALS = json.loads(os.environ.get('SERVICE_ACCOUNT_CREDENTIALS'))

  return jsonify ({
    'token': ServiceAccountCredentials.from_json_keyfile_dict(CREDENTIALS).create_scoped(SCOPE).get_access_token().access_token
  })
