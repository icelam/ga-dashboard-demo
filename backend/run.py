#!flask/bin/python

# Import app variable from our app package
from app import app

if __name__ == '__main__':
  # Invokes the run method to start the server
  ## Don't forget the app variable holds the Flask instance
  ### DEVELOPMENT (Internal-facing, Debug on)
  # app.run(debug=True)
  ### PRODUCTION (External-facing, Debug off)
  app.run(debug=False, host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
