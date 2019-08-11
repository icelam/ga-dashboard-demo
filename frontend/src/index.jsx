import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '@store/store';

import '@styles/index.scss';
import App from '@containers/AppContainer';
import * as serviceWorker from '@/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
