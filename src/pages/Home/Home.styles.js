import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root:{
    width: '100%',
    backgroundColor: 'gray',
    position: 'absolute',
    marginTop: '0',
    zIndex: '-1',
  },
  banner: {
    maxWidth: '100%',
  }
}));

export default useStyles;