const { User } = require("../models/user.model");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

module.exports = {
  register: (request, response) => {
  const { name, email, password, confirmPassword } = request.body;
  User.create({name, email, password, confirmPassword})
    .then(() => {
        response.json({ error: "success!", user: user });
    })
    .catch(err => response.json(err));
  },

  login: (request, response) => {
    User.findOne({ email: request.body.email })
      .then(user => {
        if (!user) return response.status(400).json({ error: "User not found" })
        
        bcrypt
          .compare(request.body.password, user.password,
            (err, data)  => {
              if (data) {
                const newJWT = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "365d"});
                response
                  .cookie("userToken", newJWT, {httpOnly: true})
                  .json({ message: "success!", userToken: newJWT });
              } else {
                return  response.json({ error: "invalid credentials" });
              }
        });
      })
        .catch(err => response.json({ error: "invalid login attempt"+err }));
  },
  logout: (request, response)=>{
    response.clearCookie('userToken')
    response.json({success:'success!'})
  },

  getAllUsers: (request, response) => {
    User.find({}).sort({name: 1})
      .then(users => response.json(users))
      .catch(error => catchError(error, response));
  }
}