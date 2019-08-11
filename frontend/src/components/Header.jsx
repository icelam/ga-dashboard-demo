import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI Components */
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  title: {
    flexGrow: 1
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit" className={classes.title}>
            GA Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
