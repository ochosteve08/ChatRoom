const express = require("express");
const app = express();
const http = require("http");
const Server = require("socket.io").Server;
const server = http.createServer(app);
const port = 5000;

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected now`);

  
  console.log(`we are connected to port: ${port}`);

  socket.on("chat", (chat) => {
    io.emit("chat", chat);
    console.log("server:", chat);
  });
  socket.on("disconnect", () => {
    console.log("we are disconnected");
  });



});

server.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
