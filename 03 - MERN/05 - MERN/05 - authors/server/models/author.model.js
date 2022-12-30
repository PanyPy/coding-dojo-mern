const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, "Name is required."],
    minLength: [3, "Name must be at least 3 chars long."]
  }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);
