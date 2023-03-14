const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ROLES = {
  Admin: 'Admin',
  User: 'User'
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  alias: {
    type: String,
    unique: true,
    required: [true, "Alias is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email"
    }
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    default: 'User'
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be 8 characters or longer"]
  },
  photo: {
    type: String
  }
}, {timestamps: true});

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

module.exports.User = mongoose.model('User', UserSchema);
module.exports.ROLES = ROLES;
