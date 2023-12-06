const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema({
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
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

  updated: Date,
  pLikes: [{ type: ObjectId, ref: "User" }],
  pComments: [
    {
      pText: String,
      pDate: { type: Date, default: Date.now },
      postedBy: { type: ObjectId, ref: "User" },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
