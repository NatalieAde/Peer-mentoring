import {useEffect, useState, useRef} from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';

const useChat = () => {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);

  //when component mounts and changes
  useEffect(() =>{
    // const id = JSON.parse(localStorage.getItem('users')).id;
    // axios.get("http://localhost:5000/app/getMessages/"+id,{
    //   headers: {
    //       "content-type": "application/json"
    //   }
    // }).then(res=>{
    //     const a = JSON.parse(JSON.stringify(res)).data;
    //     a.map((message, i) => {
    //       console.log(message);
    //       setMessages([...messages, message.message])
         
    //     })
    //     console.log(messages)
    // })

    socketRef.current = socketIOClient("http://localhost:5000");

    socketRef.current.on("newChatMessage", (message) => {
        const incomingMessage = {
          ...message,
          ownedByCurrentUser: message.senderId === socketRef.current.id,
        };
        setMessages((messages) => [...messages, incomingMessage]);
      });

    return ()=>{
      socketRef.current.disconnect();
    }
  },[]);

  //message is part of an object
  const sendMessage = (messageObject) =>{
    socketRef.current.emit("newChatMessage",  {
        body: messageObject,
        senderId: socketRef.current.id,
      });
  }

  return {messages, sendMessage};
}

export default useChat;