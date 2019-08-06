# GA Dashbpard #

Custom Google Analytics Dashboard written in React and Material UI, with python for getting authorization token from Google Cloud Platform.

## Tech Stack ##
* Node.js 10.x
* React 16.8.x
* Redux 4.0.x
* Pyhton 3
* Flask 1.1.x
* [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/)
* [Google API Client Library for Python](https://developers.google.com/api-client-library/python/start/installation)

***

## Prerequisite ##
1. Get a service account by following [this tutorial](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/), copy the content of JSON file 
2. Create config file `./backend/instance/config.py`, put the copied content of step 1 as config `SERVICE_ACCOUNT_CREDENTIALS='{...}'`
3. Enable [Google Analytics API](https://console.developers.google.com/apis/api/analytics.googleapis.com)
4. Add the service account created in step 1 to the Google Analytics view you wish to display
5. Add the view id to `REACT_APP_GA_VIEW_ID` of `./frontend/.env`
6. Configure the domain for getting authorization token (i.e. endpoint of Python backend)

## Setup Development Environment ##
* Frontend: `yarn install`
* Backend: `yarn setup:backend`

## Development ##
* Frontend: `yarn start:frontend`
* Backend: `yarn start:backend`

## Build production ##
* Frontend: `yarn build:frontend`

## Reference ##
* [Embed API Server-side Authorization](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/)
