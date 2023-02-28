const express = require("express");
const cors = require('cors')

const app = express () ;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen (8000, () =>
  console. log("The server is all fired up on port 8000")
);

// To initialize the socket, we need to
// pass invoke a new instance of socket.io
// and pass it our express server
const io = require ("socket.io") (server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

// const welcome = () => console.log('welcome');
io.on("connection", socket => {
  // NOTE: Each client that connects gets their own socket id!
  console. log(socket.id);
  console. log("Nice to meet you. (Handshake)");
  // if this is logged in our node terminal, that means a new client /
  // has successfully completed the handshake!

  // We add all of our additional event listeners
  // right inside this function.
  // NOTE "connection" is a BUILT IN event listeners.

  socket.on("join_chat", data => {
  // socket. broadcast will emit to all other clients besides the 
  // client who is actually emitting
  socket.emit("new_message_from_server", "Welcome to the chat!");
  });
});