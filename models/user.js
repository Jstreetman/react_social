const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  fName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  number: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
