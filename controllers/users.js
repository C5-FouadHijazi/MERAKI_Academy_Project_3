const mongoose = require("mongoose");

const userModel = require("../models/userSchema");

//**P2.B] 2.const register [Level 1] 
const register = (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Account Created Successfully",
        author: result,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
      });
    });
};

//**P2.B] 2.login [Level 1] 
const login = (req, res) => {
  userModel
    .findOne({ email: req.body.email })

    .then((result) => {
      console.log(result.email !== req.body.email);
      if (
        result.email === req.body.email &&
        result.password === req.body.password
      ) {
        console.log("failed");
        res.status(401).json({
          success: true,
          message: `Valid login Credentials`,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid login Credentials",
        });
      }
    })
    .catch((err) => {
      res.status(401).json({
        success: false,
        message: "Invalid login Credentials",
      });
    });
};

module.exports = { register, login };
