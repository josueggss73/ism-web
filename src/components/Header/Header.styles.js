import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: 'transparent',
    // background: 'white',
    // background: 'linear-gradient(to bottom, white, transparent)',
    boxShadow: 'none',
    minHeight: '0',
  },
  toolbar: {
    minHeight: '0',
  },
  title: {
    flexGrow: 1,
    color: 'green',
  },
  button: {
    textTransform: 'none',
    color: '#ef4620',
    fontSize: '28px',
    marginRight: '10px',
    fontWeight: 'bold',
    // textShadow: '-1px 0 green, 0 1px green, 1px 0 green, 0 -1px green',
  },
  logo: {
    width:'300px',
    height: 'auto',
  },
}));

export default useStyles;