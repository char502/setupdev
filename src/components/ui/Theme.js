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
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem", // rem is a responsive unit keeping it consistent across screen sizes 
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    }
  }
  
})