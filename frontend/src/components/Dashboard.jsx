import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI Components */
import Grid from '@material-ui/core/Grid';

/* Components */
import Loading from '@components/Loading';
import ErrorMessage from '@components/ErrorMessage';
import GoogleChart from '@components/GoogleChart';

/* Configs */
import chartConfigs from '@configs/chart';
import gridConfigs from '@configs/grid';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: `${theme.spacing(11)}px 0 ${theme.spacing(3)}px 0`,
    [theme.breakpoints.only('xs')]: {
      padding: `${theme.spacing(9)}px 0 ${theme.spacing(3)}px 0`
    }
  },
  datepicker: {
    margin: theme.spacing(1),
    width: '150px'
  }
}));

const Dashboard = ({ actions, apiReady, hasError }) => {
  const classes = useStyles();

  // Global Error Handler
  useEffect(() => {
    const errorHandler = () => {
      actions.setDashboardErrorState(true);
    };

    window.addEventListener('error', errorHandler);

    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return <ErrorMessage message="Error loading dashboard. Please refresh the page and try again, or check your dashboaerd config." />;
  }

  if (!apiReady) {
    return <Loading />;
  }

  if (chartConfigs.length !== gridConfigs.length) {
    return <ErrorMessage message="Length of chart config and grod congif not match." />;
  }

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        {
          gridConfigs.map((gc, i) => (
            <Grid item xs={gc.xs} sm={gc.sm} md={gc.md} lg={gc.lg} key={`grid${i}`}>
              <GoogleChart chartOptions={chartConfigs[i]} viewId={process.env.REACT_APP_GA_VIEW_ID} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  actions: PropTypes.object.isRequired,
  apiReady: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
};
export default Dashboard;
