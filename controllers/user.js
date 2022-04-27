const mongoose = require("mongoose");

let userModule = require("../models/userSchema");

let commentModule = require("../models/commentSchema");

let articleModule = require("../models/articleSchema");

const article = require("../models/articleSchema");


//P2.B]1. Register [Level 1]
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
    };
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


//P2.A] 1.createNewArticle
const createNewArticle = (req, res) => {
  const {title,description, author }= req.body
 const createarticle = new articleModule({
  title,
  description,
  author,
  });
  createarticle
  .save()
  .then((result) => {
    res.status(201).json({
      success: true,
      message: "Article created",
      author: result,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  });
}

//P2.A] 2.getAllArticles
const getAllArticles = (req,res)=>{
  userModule
  .find({})
  .then((result) => {
    res.status(200).json({
      success: true,
      message: "All the articles",
      author: [result]
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server Error",
      err: "error message"
    });
  });
}


//P2.A] 3.getArticlesByAuthor
const getArticlesByAuthor = (req,res)=>{
  const serchauthor = req.query.author
  articleModule
  .find({author: serchauthor})
  .then((result) => {
    if (result.length !== 0){
      res.status(404).json({
        success: false,
        message: `The author => ${authorId} has no articles`,
      })
    }else{
      res.status(200).json({
        success: true,
        message: `All the articles for the author → ${authorId}`,
        articles : [result]
      });
    }
  
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server Error",
      err: "error message"
    });
  });
}



//P2.A] 4.getArticleById -[Query/Key: id - Value: article id]
const getArticleById = (req,res)=>{
  const serchID = req.query.id
  articleModule
  .find({ _id : serchID })
  .then((result) => {
    console.log(result.length);
    if (result.length === 0){
      res.status(404).send({
        success: false,
        message: "The article is not found"
      })
    }else{
      console.log("heeeelpppp");
      res.status(200).send({
        success: true,
        message: `The article with id ⇾ ${articlesId}`,
        articles : result,
      });
    }
  
  })
  .catch((err) => {
    res.status(500).send({
      success: false,
      message: "Server Error",
      err: "error message"
    });
  });
}




module.exports = {
  register,
  createNewArticle,
  getAllArticles,
  getArticlesByAuthor,
  getArticleById,
}
