import React from 'react';
import { 
    Typography,
    TextField,
    Button,
    Grid
} from '@material-ui/core';
import {
    AccountCircle,
    TrackChanges,
    EventAvailable,
} from '@material-ui/icons';
import useStyles from './styles';
import useChat from './useChat';

export default function MessagesPage() {
    const classes = useStyles();
    // const { roomId } = props.match.params; // Gets roomId from URL
    const { messages, sendMessage } = useChat(); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };
    
    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Messages</Typography> 
            </div>

            

            <Grid container style={{margin: '1%'}}>
                {/* <div className={classes.sectionDesktop}> */}
                    <Grid item xs={12} sm={3} className={classes.sectionDesktop}>
                        <Typography variant='h6' align={'center'}>
                            Your Match
                        </Typography>
                        <AccountCircle style={{fontSize: 250}}/>

                        {/* TODO: set match infor here */}
                        {JSON.parse(localStorage.getItem('userInfo')).id = JSON.parse(localStorage.getItem('users')).id &&
                            <Typography variant='h4' align={'center'} style={{marginBottom: '2%'}}>
                                {JSON.parse(localStorage.getItem('userInfo')).firstName} {JSON.parse(localStorage.getItem('userInfo')).lastName}
                            </Typography>
                        }
                        
                        <div style={{marginBottom: '5%'}}>
                            <Button
                                href="/mymatch"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<AccountCircle />}
                            >
                                View Profile
                            </Button>
                        </div>
                        <div style={{marginBottom: '5%'}}>
                            <Button
                                href="/calendar"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<EventAvailable />}
                            >  
                                Schedule Meeting
                            </Button>
                        </div>
                        <div style={{marginBottom: '5%'}}>
                            <Button
                                href="/goals"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<TrackChanges />}
                            >
                                Goals
                            </Button> 
                        </div>
                    </Grid>
                {/* </div> */}

                <Grid className={classes.sectionMobile}>
                    <Grid item xs={2}>
                        <Typography style={{fontSize: 10}}>Your Match</Typography>
                        <AccountCircle style={{fontSize: 40}} />
                    </Grid>
                    <Grid item xs={4}>
                        {JSON.parse(localStorage.getItem('userInfo')).id = JSON.parse(localStorage.getItem('users')).id &&
                            <Typography variant='h5' align={'left'} style={{marginTop: '8%'}}>
                                {JSON.parse(localStorage.getItem('userInfo')).firstName} {JSON.parse(localStorage.getItem('userInfo')).lastName}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            href="/goals"
                            variant="contained"
                            size="small"
                            style={{color: '#000000', backgroundColor: '#FFFFFF', marginTop: '10%', textTransform: 'none'}}
                            startIcon={<EventAvailable />}
                        >  
                            Schedule
                        </Button> 
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <Button
                            href="/goals"
                            variant="contained"
                            size="small"
                            style={{color: '#000000', backgroundColor: '#FFFFFF', marginTop: '10%', textTransform: 'none'}}
                            startIcon={<TrackChanges />}
                        >
                            Goals
                        </Button> 
                        </div>
                        
                    </Grid>
                    
                </Grid>

                <Grid item xs={12} sm={8} style={{marginLeft: '5%', flexDirection:"row", alignSelf:"flex-start"}} >
                    {/* <div className={classes.messagesContainer}> */}
                        <ol style={{listStyleType: 'none', padding: 0,}}>
                        {messages.map((message, i) => (
                            <li
                            key={i}
                            className={`classes.messageItem ${
                                message.ownedByCurrentUser ? classes.myMessage : classes.receivedMessage
                            }`}
                            >
                            {message.body}
                            </li>
                        ))}
                        </ol>
                    {/* </div> */}

                    <Grid container style={{position:'fixed', bottom:10, width:'75%' }}>
                        <Grid item xs={10}>
                            <TextField
                                id="outlined-basic"                                    
                                variant="outlined"
                                color="primary"
                                size="small"
                                value={newMessage}
                                onChange={handleNewMessageChange}
                                placeholder='Type message here'
                                fullWidth
                                style={{height: "10px"}}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                onClick={handleSendMessage}
                                size="large"
                                style={{ color: '#FFFFFF', backgroundColor: '#83008F'}}
                            >
                                Send
                            </Button>
                        </Grid>
                        
                       
                    </Grid>
                </Grid>
            </Grid>

            
        </React.Fragment>
    )
}