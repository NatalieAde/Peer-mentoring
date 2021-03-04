import React, {useEffect, useState, useRef} from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
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
                    <Grid item xs={12} sm={3} className={classes.profileContainer}>
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
                                to="/calendar"
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
                                to="/goals"
                                variant="contained"
                                size="large"
                                style={{color: '#000000', backgroundColor: '#FFFFFF'}}
                                startIcon={<TrackChanges />}
                            >
                                Goals
                            </Button> 
                        </div>
                       
                      
                        
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

                        <div style={{position:'fixed', bottom:10, width:'75%' }}>
                            <TextField
                                id="outlined-basic"                                    
                                variant="outlined"
                                color="primary"
                                size="small"
                                value={newMessage}
                                onChange={handleNewMessageChange}
                                placeholder='Type message here'
                                fullWidth
                                style={{width: '80%', height: "10px"}}
                            />
                            <Button
                                variant="contained"
                                onClick={handleSendMessage}
                                size="large"
                                style={{width: '10%', color: '#FFFFFF', backgroundColor: '#83008F'}}
                            >
                                Send
                            </Button>
                        </div>
                    </Grid>
            </Grid>

            
        </React.Fragment>
    )
}




// import React from "react";
// import MessageBox from "./messageBox";
// import Messages from "./messages";
// import useChat from "./useChat";

// const Chat = (currentUserData) => {
//   //useChat calls to our custom hook
//   //it returns an object with messages and sending a message
//   const {messages, sendMessage} = useChat();
//   return (
//     <div>
//       <Messages
//         messages={messages}
//       />
//       <MessageBox
//         userData={currentUserData}
//         onSendMessage={message => {
//           sendMessage(message);
//         }}
//       />
//     </div>
//   );
// };

// export default Chat;