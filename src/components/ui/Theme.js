import { createMuiTheme } from '@material-ui/core/styles';

const setupBlue = '#0b72b9'
const setupOrange = '#FFBA60'

export default createMuiTheme({
  palette: {
    common: {
      blue: setupBlue,
      orange: setupOrange
    },
    primary: {
      main: setupBlue
    },
    secondary: {
      main: setupOrange
    }
  },
  typography: {
    // fontFamily: '\'Lato\', "Lucida Grande", Tahoma, Sans-Serif',
    // h1: {
    //   fontSize: '2.6em',
    //   fontWeight: 900
    // }
    h3: {
        fontWeight: 300
      }
  }
})