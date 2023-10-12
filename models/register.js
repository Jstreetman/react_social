const mongoose = require("mongoose");

const Register = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  fName: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", Register);

module.exports = User;
