const Joke = require("../models/joke.model");

const catchError = (error, response) => response.json({message: "Something went wrong", error});

module.exports.findAllJokes = (request, response) => {
  Joke.find()
    .then(jokes => response.json({jokes}))
    .catch(error => catchError(error, response));
};

module.exports.findOneSingleJoke = (request, response) => {
  Joke.findOne({ _id: request.params.id })
    .then(joke => response.json({joke}))
    .catch(error => catchError(error, response));
};

module.exports.findRandomJoke = (request, response) => {
  Joke.count()
    .then(count => (
      Joke.findOne().skip(Math.floor(Math.random() * count))
        .then(joke => response.json({joke}))
        .catch(error => catchError(error, response))
    ))
    .catch(error => catchError(error, response));
};

module.exports.createNewJoke = (request, response) => {
  Joke.create(request.body)
    .then(newJoke => response.json({ joke: newJoke }))
    .catch(error => catchError(error, response));
};

module.exports.updateExistingJoke = (request, response) => {
  Joke.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updatedJoke => response.json({ joke: updatedJoke }))
    .catch(error => catchError(error, response));
};

module.exports.deleteAnExistingJoke = (request, response) => {
  Joke.deleteOne({ _id: request.params.id })
    .then(result => response.json({ result: result }))
    .catch(error => catchError(error, response));
};
