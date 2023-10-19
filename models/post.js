const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  pText: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  uImage: {
    type: String,
    required: true,
  },

  pDate: {
    type: String,
    required: true,
  },

  pLikes: {
    type: String,
    required: true,
  },
  pComments: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
