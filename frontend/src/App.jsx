import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import googleApi from '@utils/googleAnalyticsApi';
import getAlanyticsAccessToken from '@services/accessTokenService';

/* Theme */
import muiTheme from '@styles/muiTheme';

/* Cpmponents */
import Page from '@components/Page';
import Loading from '@components/Loading';

/* Routes */
import routes from '@routes';

/* Pages */
const Dashboard = lazy(() => import(/* webpackChunkName: 'Dashboard' */ '@containers/DashboardContainer'));

const history = createBrowserHistory();

// Execute when user navigates between routes
const onRouteChange = (history) => {
  history.listen((location) => {
    window.scrollTo(0, 0);
  });
};

onRouteChange(history);

const redirectToHome = () => <Redirect to={routes.dashboard} />;

const App = ({ actions }) => {
  useEffect(() => {
    getAlanyticsAccessToken().then(({ data }) => {
      // Init Google API for Analtyics Embed API
      googleApi.init(data.token, () => {
        actions.setGaApiReady();
      });
    });
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="App">
        <Page>
          <Router history={history}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path={routes.dashboard} component={Dashboard} />
                <Route component={redirectToHome} />
              </Switch>
            </Suspense>
          </Router>
        </Page>
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  actions: PropTypes.object.isRequired
};


export default App;
