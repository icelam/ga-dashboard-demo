import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffca53',
      main: '#f7991c',
      dark: '#be6b00',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ff9a44',
      main: '#e86a0e',
      dark: '#af3b00',
      contrastText: '#ffffff'
    }
  }
});

export default muiTheme;
