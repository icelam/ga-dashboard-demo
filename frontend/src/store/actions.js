import * as types from './types';

export const setGaApiReady = () => ({
  type: types.GA_API_READY
});

export const setDashboardErrorState = hasError => ({
  type: types.DASHBOARD_ERROR,
  hasError
});
