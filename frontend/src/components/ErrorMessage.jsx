import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI Components */
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  }
});

const ErrorMessage = ({ message }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <Grid item>
        <Typography variant="body2" color="textSecondary" component="p" align="center">{message}</Typography>
      </Grid>
    </Grid>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
