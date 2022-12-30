const { Author } = require("../models/author.model");

const catchError = (error, response) => response.status(400).json(error);

module.exports.createAuthor = (request, response) => {
  const { name } = request.body;
  Author.create({
    name
  })
    .then(author => response.json(author))
    .catch(error => catchError(error, response));
}

module.exports.getAllAuthors = (request, response) => {
  Author.find({}).sort({name: 1})
    .then(authors => response.json(authors))
    .catch(error => catchError(error, response));
}

module.exports.getAuthor = (request, response) => {
  Author.findOne({_id:request.params.id})
    .then(author => response.json(author))
    .catch(error => catchError(error, response));
}

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(error => catchError(error, response));
}

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => catchError(error, response));
}
