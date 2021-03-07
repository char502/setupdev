import React from 'react';
// import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from './ui/Theme'
import Header from './ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/services" component={() => <div>Services</div>} />
            <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
            <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
            <Route exact path="/websites" component={() => <div>Websites</div>} />
            <Route exact path="/revolution" component={() => <div>Revolution</div>} />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
            <Route exact path="/estimate" component={() => <div>Estimate</div>} />
          </Switch>
      </BrowserRouter>
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
