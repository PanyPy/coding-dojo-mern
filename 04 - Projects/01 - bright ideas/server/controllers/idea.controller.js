const { Idea } = require("../models/idea.model");
const jwt = require("jsonwebtoken");
const { ROLES } = require("../models/user.model");

const catchError = (error, response) => {
  console.log(error);
  return response.status(400).json(error);
};

module.exports.createIdea = (request, response) => {
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
  const currentUser = jwt.decode(request.cookies.userToken, process.env.SECRET_KEY);

  // retrieve all Ideas if admin
  // retrieve approved Ideas and users own Ideas if User
  const ideaQuery = currentUser.role === ROLES.Admin ? Idea.find({}) : Idea.find({$or: [{approvedAt: { $ne: null }}, {postedBy: currentUser._id}]});
  ideaQuery.sort({ name: 1}).populate('postedBy')
    .then(ideas => response.json(ideas))
    .catch(error => catchError(error, response));
}

module.exports.getIdea = (request, response) => {
  Idea.findOne({_id: request.params.id}).populate('postedBy').populate("likes")
    .then(idea => response.json(idea))
    .catch(error => catchError(error, response));
}

module.exports.updateIdea = (request, response) => {
  const currentUserRole = jwt.decode(request.cookies.userToken, process.env.SECRET_KEY).role;

  if(currentUserRole !== ROLES.Admin && request.body.approvedAt){
    return response.status(500).json({error: "Only Admins can Approve Ideas"});
  }
  Idea.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(error => catchError(error, response));
}

module.exports.deleteIdea = (request, response) => {
  Idea.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => catchError(error, response));
}
