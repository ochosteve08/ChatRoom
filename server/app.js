const express = require('express');
const app = express();
const http = require('http');
const Server = require('socket.io').Server
const server = http.createServer(app)
const port = 5000



const io = new Server(server,{
    cors:{
        origin: "*"
    }
});

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  // a chat event was received from the client
  socket.on("chat", (chat) => {
    // the chat is sent to other channels connected to the server
    io.emit("chat", chat);
  });

  // upon disconnection
  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});



server.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});