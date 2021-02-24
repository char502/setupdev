import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core/';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true, //do you want a delay when scrolling
    threshold: 0, // how far the user has to scroll before it triggers the event listener (defaults to 100)
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em"
  },
  logo: {
    height: "7em"
  }
}))

export default function Header(props) {

  const classes = useStyles()
  
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" /* color="primary" - defaults to primary, can change to secondary etc */>
          <Toolbar disableGutters>
            <img alt='company logo' className={classes.logo} src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
