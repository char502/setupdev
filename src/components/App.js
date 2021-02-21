import React from 'react';
// import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme'
import Header from './ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      hello!
      <p>this is a test</p>
    </ThemeProvider>
  );
}

export default App;

// {[...new Array(120)] // creates 120 copies of the below onto the screen
//   .map(
//     () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//   )
//   .join('\n')}
