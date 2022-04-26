const mongoose = require("mongoose");

let userModule = require("../models/userSchema");

let commentModule = require("../models/commentSchema");

let articleModule = require("../models/articleSchema");

const register = (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  const logInUser = new userModule({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });
  logInUser
  .save()
  .then((result) => {
    res.status(201).json({
      success: true,
      message: "Account Created Successfully",
      author: result.firstName,
    });
  })
  .catch((err) => {
    if (err.keyPattern){
      res.status(409).json({
        success: false,
        message: "The email already exists",
        err :"error "
    })
    }
  
    console.log(err.keyPattern);
    res.status(404).json({
      success: false,
      message: "Server Error",
    });
  });
}


/* {
  "title" : "This Day Is Great"
  "description" : "Wednesday"
  "author" : "626704538c32c8eac0050ea6"
} */

const createNewArticle = (req, res) => 
{
  const { title, description, author } = req.body;
  const newUser = new articleModule({
    title,
    description,
    author,

  });

  newUser
  .save()
  .then((result) => {
    res.status(201).json({
      success: true,
      message: "Article created",
      author: result.title,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  });
}









module.exports = {
  register,
  createNewArticle,
}
