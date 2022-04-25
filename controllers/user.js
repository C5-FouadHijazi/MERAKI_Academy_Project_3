const mongoose = require("mongoose");

const userModule = require("../models/userSchema");

let commentModule = require("../models/commentSchema");

let articleModule = require("../models/articleSchema");

const register = (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  const newuser = new userModule({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });

  newuser
    .save()
    .then((result) => {
      if (this.email) {
        res.status(409).json({
          "success": false,
          "message": "The email already exists",
        });
      } else {
        res.status(201).json({
          "success": true,
          "message": "Account Created Successfully",
          "author": newuser,
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  register,
}
