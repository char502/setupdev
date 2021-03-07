import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core/';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"
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
    height: "8em"
  }, 
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    },
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px" // px Good for spaceing as don't want this to change (unlike size of text where do)
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px"
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}))

export default function Header(props) {

  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i)

  }

  const handleClosed = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const menuOptions = [
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Custom Software Development',
      link: '/customsoftware'
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps'
    },
    {
      name: 'Website Development',
      link: '/websites'
    },
]

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4)
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5)
    }

    switch(window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0)
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break;
      case "/websites": 
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(3)
        }
        break;
      case "/revolution": 
        if (value !== 2) {
          setValue(2)
        }
        break;
      case "/about": 
        if (value !== 3) {
          setValue(3)
        }
        break;
      case "/contact": 
        if (value !== 4) {
          setValue(4)
        }
        break;
      case "/estimate": 
        if (value !== 5) {
          setValue(5)
        }
        break;
      default:
        break;
    }
  }, [value])
  
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" /* color="primary" - defaults to primary, can change to secondary etc */>
          <Toolbar disableGutters>
            <Button 
              component={Link} 
              to="/" 
              disableRipple
              onClick={() => setValue(0)} 
              className={classes.logoContainer}
            >
              <img alt='company logo' className={classes.logo} src={logo} />
            </Button>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              className={classes.tabContainer} 
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} className={classes.tab} component={Link} onMouseOver={event => handleClick(event)} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClosed}
              classes={{paper: classes.menu}}
              MenuListProps={{onMouseleave: handleClosed}}
              elevation={0}
            >

              {menuOptions.map((option, i) => (
                <MenuItem 
                  key={option} 
                  classes={{root: classes.menuItem}}
                  onClick={(event) => {handleMenuItemClick(event, i); setValue(1); handleClosed() }}
                  selected={i === selectedIndex && value === 1}
                  component={Link} 
                  to={option.link}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>  
  );
}
