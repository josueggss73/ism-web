import React from 'react';

import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  
  return <div className={classes.root}>Header</div>
}

Header.propTypes = {};

export default Header;