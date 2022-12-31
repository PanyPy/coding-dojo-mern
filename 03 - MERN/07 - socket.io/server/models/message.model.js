const mongoose = require("mongoose");

const MessageItemSchema = new mongoose.Schema({ 
  username: String, message: String
})

const MessageSchema = new mongoose.Schema({
  room: String,
  messages: [MessageItemSchema],
}, {timestamps: true});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;