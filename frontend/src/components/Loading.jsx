import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI Components */
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  }
});

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <Grid item>
        <CircularProgress spacing={1} className={classes.progress} />
      </Grid>
    </Grid>
  );
};

export default Loading;
