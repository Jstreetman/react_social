const express = require("express");
const router = express.Router();
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const { body, validationResult } = require("express-validator");
const Register = require("../models/register");

if (process.env.CORS) {
  router.use(cors());
}

router.post(
  "/signup",
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
      return res.status(400).json({ errors: errors.array() });
    }

    // Extracting data from the form request body
    const { username, email, password, fName, gender } = req.body;

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

module.exports = router;
