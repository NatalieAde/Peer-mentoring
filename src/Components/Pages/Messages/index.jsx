import React, {useEffect, useState, useRef} from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import useChat from './useChat';

export default function MessagesPage() {
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

            <div style={{ flex: 1, minHeight: '100px', overflow: 'auto', border: '1px solid black', borderRadius: '7px 7px 0 0'}}>
                <ol style={{listStyleType: 'none', padding: 0}}>
                {messages.map((message, i) => (
                    <li
                    key={i}
                    className={`message-item ${
                        message.ownedByCurrentUser ? "my-message" : "received-message"
                    }`}
                    >
                    {message.body}
                    </li>
                ))}
                </ol>
            </div>

            <div style={{position:'fixed', bottom:10, left:80, justifyContent: 'center', alignItems: 'center', width:'100%'}}>
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