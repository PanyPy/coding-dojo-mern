const mongoose = require('mongoose');
const UserSchema = require('./user.model');

const IdeaSchema = new mongoose.Schema({
  likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  note: {
    type: String,
    required: [true, "The idea is required"],
    minlength: [8, "The idea must be 8 characters or longer"]
  },
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

module.exports.Idea = mongoose.model('Idea', IdeaSchema);
