const { Idea } = require("../models/idea.model");
const jwt = require("jsonwebtoken");

const catchError = (error, response) => {
  console.log(error);
  return response.status(400).json(error);
};

module.exports.createIdea = (request, response) => {
  console.log('create')
  const { note } = request.body;
  const postedBy = jwt.decode(request.cookies.userToken, process.env.SECRET_KEY)._id;
  Idea.create({
    postedBy,
    note
  })
    .then(idea => response.json(idea))
    .catch(error => catchError(error, response));
}

module.exports.getAllIdeas = (request, response) => {
  Idea.find({}).sort({name: 1}).populate('postedBy')
    .then(ideas => response.json(ideas))
    .catch(error => catchError(error, response));
}

module.exports.getIdea = (request, response) => {
  Idea.findOne({_id: request.params.id}).populate('postedBy').populate("likes")
    .then(idea => response.json(idea))
    .catch(error => catchError(error, response));
}

// module.exports.likeIdea = (request, response) => {
//   console.log(request.params.id)
//   console.log(request.params.user_id)
//   console.log(request.params)
//   // Idea.findOne({_id: request.params.id}).populate('postedBy').populate("likes")
  //   .then(idea => response.json(idea))
  //   .catch(error => catchError(error, response));
// }/

module.exports.updateIdea = (request, response) => {
  Idea.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(error => catchError(error, response));
}

module.exports.deleteIdea = (request, response) => {
  Idea.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => catchError(error, response));
}
