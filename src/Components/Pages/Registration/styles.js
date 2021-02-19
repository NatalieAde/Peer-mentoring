import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  step: {
    "&$completed": {
      color: "lightgreen"
    },
    "&$active": {
      color: "pink"
    },
    "&$disabled": {
      color: "red"
    },
    // "&$disabled: {
    //   color: "red"
    // }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    textTransform: 'none',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    textTransform: 'none',
    backgroundColor: "#F1960D",
    color: "white"
  },
  // wrapper: {
  //   margin: theme.spacing(1),
  //   position: 'relative'
  // },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: "black"
  }
}));