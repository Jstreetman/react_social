const { ObjectId } = require("mongodb");
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
    required: false,
  },

  pDate: {
    type: String,
    required: true,
  },

  pLikes: {
    type: String,
    required: false,
  },
  pComments: {
    type: String,
    required: false,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
