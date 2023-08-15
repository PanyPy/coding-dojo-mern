const { User } = require("../models/user.model");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

module.exports.register = (request, response) => {
  const { name, email, password, confirmPassword } = request.body;
  User.create({name, email, password, confirmPassword})
    .then(() => {
        response.json({ msg: "success!", user: user });
    })
    .catch(err => response.json(err));
};

module.exports.login = (request, response) => {
  User.findOne({ email: request.body.email })
    .then(user => {
      if (!user) return response.status(400).json({ msg: "User not exist" })
      
      bcrypt
        .compare(request.body.password, user.password,
          (err, data)  => {
            if (data) {
              const newJWT = jwt.sign(
                {_id: user._id},
                process.env.SECRET_KEY,
                {expiresIn: "365d"});
              response
                .cookie("usertoken", newJWT, {
                  httpOnly: true
                })
                .json({ msg: "success!", usertoken: newJWT });
            } else {
              console.log(err)
              console.log('is not valid')
              return  response.json({ msg: "invalid credentials" });
            }
        });
      })
        .catch(err => response.json({ msg: "invalid login attempt"+err }));
    // .catch(err => response.json(err));
};


// module.exports.getPlayer = (request, response) => {
//   Player.findOne({_id:request.params.id})
//     .then(player => response.json(player))
//     .catch(error => catchError(error, response));
// }

// module.exports.updatePlayer = (request, response) => {
//   Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//     .then(updatedPlayer => response.json(updatedPlayer))
//     .catch(error => catchError(error, response));
// }

// module.exports.deletePlayer = (request, response) => {
//   Player.deleteOne({ _id: request.params.id })
//     .then(deleteConfirmation => response.json(deleteConfirmation))
//     .catch(error => catchError(error, response));
// }
