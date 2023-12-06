const express = require("express");
const router = express.Router();

router.post(
  "/create",
  requireLogin,
  // upload.single("uImage"),
  async (req, res) => {
    try {
      if (!req.session.user) {
        return res.status(401).json({ message: "User is not logged in..." });
      }

      //extract post data
      const { pText } = req.body;
      //getting userid from session
      const username = req.session.username;
      const email = req.session.email;

      //create post with the specific user

      console.log(username);
      console.log(email);
      const newPost = new Post({
        pText,
        username,
        email,
        pDate: formatDate(new Date()),
      });

      //saving to database
      await newPost.save();

      res.status(201).json({ message: "Post Sucessfully Submitted..." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

router.get("/posts", requireLogin, async (req, res) => {
  try {
    if (!req.session.user) {
      res.status(401).json({ message: "User is not authenticated..." });
    }
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error..." });
  }
});

router.post("/posts/pLikes/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found..." });
    }

    //increment like
    post.pLikes += 1;
    await post.save();

    res.status(200).json({ message: "Like up..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error:" + error.message });
  }
});

module.exports = router;
