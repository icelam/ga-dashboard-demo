import * as types from './types';
import initialState from './states';

export default (state = initialState, action) => {
  switch (action.type) {
    // Google Analytics Embed API is loaded
    case types.GA_API_READY:
      return Object.assign({}, state, {
        apiReady: true
      });
    // Dashboard error status
    case types.DASHBOARD_ERROR:
      return Object.assign({}, state, {
        hasError: action.hasError
      });
    default:
      return state;
  }
};
