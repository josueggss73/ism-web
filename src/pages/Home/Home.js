import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from './Home.styles';
import banner from './banner.jpeg';

const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <img src={banner} alt="Banner" className={classes.banner}/>
    <Box my={2}>
      {[...new Array(52)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')}
    </Box>
  </div>
  );
}

Home.propTypes = {};

export default Home;