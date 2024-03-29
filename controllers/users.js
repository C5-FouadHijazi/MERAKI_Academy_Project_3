const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userSchema");

//**P2.B] 2.const register [Level 1]
const register = (req, res) => {
  const { firstName, lastName, age, country, email, password , role } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role
  });
  newUser
    .save()
    .then((result) => {
      if (result.email === email.toLowerCase()) {
        res.status(201).json({
          success: true,
          message: "Account Created Successfully",
          author: result,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(409).json({
        success: false,
        message: "The email already exists",
      });
    });
};

//**P2.B] 2.login [Level 1]
const login = (req, res) => {
  userModel
    .find({ email: req.body.email })
    .populate("role")
    .then((result) => {
      console.log(result[0].password);
      const hashpassword = result[0].password;
      const password = req.body.password;
      console.log(result);
      bcrypt.compare(password, hashpassword, (err, result2) => {
        if (result2 === true) {
          const payload = {
            userId: result[0]._id,
            country: result[0].country,
            role : result.role
          };
          const options = {
            expiresIn: "1h",
          };
          const token = jwt.sign(payload, process.env.SECRET, options);
          res.status(201).json({
            success: true,
            message: `Valid login Credentials`,
            token: token,
          });
        } else {
          res.status(401).json({
            success: false,
            message: "Valid login credentials",
          });
        }
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        massage: "The email doesn't exist",
      });
    });
};

module.exports = { register, login };
