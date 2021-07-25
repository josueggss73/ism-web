import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.png';
import useStyles from './Header.styles';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
children: PropTypes.element.isRequired,
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="Logo" className={classes.logo}/>
          </Typography>
          <Button className={classes.button}>Servicios</Button>
          <Button className={classes.button}>Clientes</Button>
          <Button className={classes.button}>Nosotros</Button>
          <Button className={classes.button}>Contacto</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar className={classes.toolbar}/>
    </React.Fragment>
  );
}

Header.propTypes = {};

export default Header;