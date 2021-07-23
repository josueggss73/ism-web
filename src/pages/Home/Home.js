import React from 'react';

import useStyles from './Home.styles';

const Home = () => {
  const classes = useStyles();
  
  return <div className={classes.root}>Home</div>
}

Home.propTypes = {};

export default Home;