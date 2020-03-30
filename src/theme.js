import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { pink, indigo } from '@material-ui/core/colors';
import { InsertLinkRounded } from '@material-ui/icons';

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
    },
    h3: {
      fontSize: 16,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
