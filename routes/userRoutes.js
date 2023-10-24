const express = require("express");
const router = express.Router();
const multer = require("multer");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const { body, validationResult } = require("express-validator");
const Register = require("../models/register");
const Post = require("../models/post");

//express session
router.use(
  session({
    secret: "reactproject", // set your own private key
    resave: false,
    saveUninitialized: true,
  })
);

//require login function
const requireLogin = (req, res, next) => {
  if (req.session.user) {
    // if the user is logged in, proceed to the next middleware
    next();
  } else {
    res.redirect("/login");
  }
};

if (process.env.CORS) {
  router.use(cors());
}

const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

//configure store and file for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/client/src/users"); // The directory where uploaded images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/feed", requireLogin);

router.post(
  "/signup",
  upload.single("uImage"),
  [
    // Validate password: minimum 8 characters
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    // Other validation rules for username and email
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
  ],
  async (req, res) => {
    // checking for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("Validation Errors:", errors.array());
      console.log("Request Body:", req.body);
      return res.status(400).json({ errors: errors.array() });
    }

    // Extracting data from the form request body
    const { username, email, password, fName, gender } = req.body;
    const uImage = req.file ? req.file.path : null;

    console.log("Request Body:", req.body);
    console.log("File:", req.file);

    try {
      // checking if the user is already registered

      const existingUser = await Register.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already registered..." });
      }

      // Hashing the password for security purposes
      const hashPassword = await bcrypt.hash(password, 10);

      // Creating the user
      const newUser = new Register({
        username,
        email,
        password: hashPassword,
        fName,
        gender,
        uImage,
      });

      // saving info to the database
      await newUser.save();

      res.status(201).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error..." });
    }
  }
);

router.post(
  "/create",
  requireLogin,
  upload.single("uImage"),
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

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Invalid Email..."),
    body("password").notEmpty().withMessage("Password is required..."),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      // Check if email exists in the database
      const user = await Register.findOne({ email });

      console.log("User:", user);

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Make sure the password is valid
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // If all is valid, proceed
      req.session.user = user;
      req.session.username = user.username;
      req.session.email = user.email;

      res.status(200).json({ message: "Login Successful", user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error..." });
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

router.get("/feed", (req, res) => {
  if (!req.session.user) {
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    } else {
      // Redirect to a login page or any other appropriate page after logout
      res.redirect("/login"); // Change the route as needed
    }
  });
});
module.exports = router;
