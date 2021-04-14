import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
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

      sectionMobile: {
        display: 'flex',
        backgroundColor: '#F6F6F6',
        width: '100%',
        [theme.breakpoints.up('md')]: {
          display: 'none',
          backgroundColor: 'black',
        },
    },

    profileContainer: {
        backgroundColor: '#F6F6F6',
        height: '650px',
        borderRadius: 15,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },

    messagesContainer: {
        flex: 1,
        minHeight: '100px',
        overflow: 'auto',
        border: '1px solid black',
        borderRadius: '7px 7px 0 0'
    },

    messagesList: {
        listStyleType: 'none',
        padding: 0,
        marginBottom: '10%'
    },

    messageItem: {
        margin: '8px',
        padding: '12px 8px',
        wordbreak: 'break-word',
        bordeRadius: '4px',
        color: 'white'
    },

    myMessage: {
        backgroundColor: '#F8F0F8',
        marginLeft: 'auto',
        marginBottom: '2%',
        fontWeight: 'bold',
        padding: '10px',
        textAlign:'right',
        marginLeft: '20%',
        borderRadius: '6px',
        fontSize: 22,
    },

    receivedMessage: {
        backgroundColor: '#FEF6F0',
        marginRight: 'auto',
        marginBottom: '2%',
        fontWeight: 'bold',
        padding: '10px',
        textAlign:'left',
        marginRight: '20%',
        borderRadius: '6px',
        fontSize: 22,
    }
}))
