const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, "Name is required."],
    minLength: [2, "Name must be at least 2 chars long."]
  },
  position: {
    type: String,
    enum: {
      values: ['', 'Forward', 'Goalkeeper', 'Midfielder'],
      message: 'Invalid value for preferred position'
    }
  }  ,
  gameStatus: {
    type:[{status: String}],
    default: [{status: "Undecided"}, {status: "Undecided"}, {status: "Undecided"}]
  }
}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);
