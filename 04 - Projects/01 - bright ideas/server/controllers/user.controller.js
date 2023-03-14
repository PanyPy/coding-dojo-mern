const { User } = require("../models/user.model");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { Idea } = require("../models/idea.model");

const catchError = (error, response) => response.status(400).json(error);

module.exports = {
  register: (request, response) => {
  const { name, alias, email, password, confirmPassword } = request.body;
  User.create({name, alias, email, password, confirmPassword})
    .then(user => {
        return response.json({ message: "success!", user: user });
    })
    .catch(err => {
      // this is how it recognize uniqueness
      if(err.code === 11000) {
        const value = Object.keys(err.keyValue)[0];
        return response.status(400).json(
          {errors:
            { [value]: {message: `${value.charAt(0).toUpperCase()+value.slice(1)} already exists`}}
          }
          );
      } else {
        return response.status(400).json(err)
      }
    });
  },

  getUser: (request, response) => {
    User.findOne({_id: request.params.id})
      .then(async user => {
        const postCount = await Idea.count({postedBy: user._id});
        const likesCount = await Idea.find({likes: user._id}).count();
        return response.json({...user.toJSON(), postCount, likesCount})
      })
      .catch(error => catchError(error, response));
  },

  login: (request, response) => {
    User.findOne({ email: request.body.email })
      .then(user => {
        if (!user) return response.status(400).json({ user: "User not found" })
        
        bcrypt
          .compare(request.body.password, user.password,
            (err, data)  => {
              if (data) {
                const newJWT = jwt.sign({_id: user._id, role: user.role}, process.env.SECRET_KEY, {expiresIn: "365d"});
                response
                  .cookie("userToken", newJWT, {httpOnly: true})
                  .json({ message: "success!", userToken: newJWT, user });
              } else {
                return  response.status(400).json({ error: "invalid credentials" });
              }
        });
      })
        .catch(err => response.status(400).json({ error: "invalid login attempt"+err }));
  },
  logout: (request, response) => {
    response.clearCookie('userToken')
    response.json({success:'success!'})
  },

  editUser:(request, response) => {
    User.updateOne({_id:request.body.id}, request.body)
    .then((resultado)=> {
      //Buscar datos actualizados para enviar y guardar en localstorage
      User.findOne({_id:request.body.id})
      .then((user)=>{
        response.json(user);
      })
      //response.json(resultado);
    }).catch((error)=>{
      response.status(400).json(error)
    })
  }
}