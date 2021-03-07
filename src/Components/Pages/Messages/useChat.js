import {useEffect, useState, useRef} from "react";
import socketIOClient from "socket.io-client";

const useChat = () => {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);

  //when component mounts and changes
  useEffect(() =>{
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