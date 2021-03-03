const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const { response } = require('express');
const routeUrls = require('./Routes/routes');

//configures so we can have enironment variables in the .env file
require('dotenv').config();

//how express server is created
const app = express();
const port = process.env.PORT || 5000;
// const server = http.createServer(app);
// const io = socketio(server);

//databased uri, where DB is stored, get from mondoDB dashbored
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})




//middleware
app.use(express.json());
app.use(cors());
app.use('/app', routeUrls)

//starts server
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// const io = socketio(server);
const io = socketio(server, { cors: { origin: '*' } });


io.on("connection", (socket) => {
  
  // Join a conversation
  // const { roomId } = socket.handshake.query;
  // socket.join(roomId);

  // Listen for new messages
  socket.on("newChatMessage", (data) => {
    io.emit("newChatMessage", data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log('Disconnected');
  });
});console.log('user connected');
