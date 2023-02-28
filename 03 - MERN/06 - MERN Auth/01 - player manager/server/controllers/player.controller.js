const { Player } = require("../models/player.model");

const catchError = (error, response) => response.status(400).json(error);

module.exports.createPlayer = (request, response) => {
  const { name, position } = request.body;
  Player.create({name, position})
    .then(player => response.json(player))
    .catch(error => catchError(error, response));
}

module.exports.getAllPlayers = (request, response) => {
  Player.find({}).sort({name: 1})
    .then(players => response.json(players))
    .catch(error => catchError(error, response));
}

module.exports.getPlayer = (request, response) => {
  Player.findOne({_id:request.params.id})
    .then(player => response.json(player))
    .catch(error => catchError(error, response));
}

module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPlayer => response.json(updatedPlayer))
    .catch(error => catchError(error, response));
}

module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => catchError(error, response));
}
