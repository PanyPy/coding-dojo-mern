require('./server/config/mongoose.config');

const express = require("express");
const cors = require('cors');
const Message = require('./server/models/message.model');

const app = express () ;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen (8000, () =>
  console. log("The server is all fired up on port 8000")
);

const io = require ("socket.io") (server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

io.on("connection", socket => {
  socket.on("new_message", data => {
    const {username, room, message} = data;
    // Notify to other users
    socket.broadcast.emit("new_message_from_server_"+room, {username, message});

    // store message in db, this should go in the controller, you can move if you want :)
    const newData = {username: username, message: message};
    Message.findOneAndUpdate({room: room}, {$push: {messages: newData}}, 
      (error, success) => {
        if (error) console.error(error);
        else console.log(success);
      });
  })

  socket.on("join_chat", data => {
    const {username, room} = data;

    // load message from db and return;
    Message.findOne({room: room})
      .then(roomFromDB => {
        // create if doesn't exist, , this should go in the controller, you can move if you want :)
        if(!roomFromDB)Message.create({room, message:[]})
        const messages = roomFromDB?.messages || [];
        messages.push({message:"Welcome to the chat!"});

        // send messages to the FE
        socket.emit("welcome_new_message_from_server_"+room, messages);
      }).then(() =>{
        // Notify to other users
        socket.broadcast.emit("new_message_from_server_"+room, {message: `${username} Joined the chat`});
      });
  });
});