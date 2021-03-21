import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    //   backgroundColor: theme.palette.background.paper,
    //   display: 'flex',
    //   height: 224,
    // },
    // tabs: {
    //   borderRight: `1px solid ${theme.palette.divider}`,
    // },
    root: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: "95%",
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3)
        }
    }
}));