
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    width:'100%',
    justifyContent:'flex-end',
    marginRight: '2%',
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
  tabsText: {
    textTransform: 'none',
    fontSize: 20,
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    color: '#000000' 
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