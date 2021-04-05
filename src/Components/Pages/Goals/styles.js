import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    sectionDesktop: {
        display: 'none',
        // margin: '1%',
        [theme.breakpoints.up('md')]: {
            position:'fixed',
            backgroundColor: '#F6F6F6',
            height: '650px',
            borderRadius: 15,
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
        },
    },
    root2: {
        flexGrow: 1,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        // width: "40%"
    },
    root: {
        width: '100%',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: "95%",
            // marginLeft: 'auto',
            // marginRight: 'auto'
        },
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            // marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3)
        }
    }
}));