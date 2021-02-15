
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    position: 'relative',
    background: '#EC6D0A',
    width: '100%',
    flexGrow: 1,
  },
  font: {
    color: '#FFFFFF'
  },
  button: {
    textTransform: 'none',
    color: 'inherit',
    fontSize: 24,
    // textDecorationLine: 'underline'
  },
  clickedButton: {
    fontWeight: 'bold',
    color: 'inherit'
  },
  indicator: {
    backgroundColor: "white"
  }
}));