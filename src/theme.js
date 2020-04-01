import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { pink, indigo, grey } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[800]
    },
    secondary: {
      main: indigo[700]
    },
    error: {
      main: pink[700]
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: 20,
      fontWeight: 500,
      marginLeft: 5,
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      marginBottom: 5,
    },
    h3: {
      fontSize: 14,
      color: grey[50],
      padding: 3,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
