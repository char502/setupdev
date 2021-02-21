import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core/';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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

export default function Header(props) {

  
  return (
    <ElevationScroll>
    <AppBar position="fixed">
      <Toolbar>
        Setup Development
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}
