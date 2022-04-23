let articles = require("../models/articles");
const { uuid } = require('uuidv4');

// 1. this function return all articles
const getAllArticles = (req, res) => {
  res.status(200).json(articles);
};



const getArticlesByAuthor = (req , res) =>{ 
const found = articles.filter((element ,index)=>{
  return element.author === req.query.author
})
res.status(200)
res.json(found)
}


const getArticleById = (req,res) =>{
  const found = articles.filter((element ,index)=>{
    return element.id === req.query.id
  })
  res.status(200)
  res.json(found)
  }

  /*{"title": "server",
"description": "Lorem , Quam ,mollitita",
"author": "Soso"}*/

const createNewArticle = (req ,res) =>{
  const newarticle = { id: uuid(),  title: req.body.title ,description: req.body.description , author: req.body.author}
  articles.push(newarticle)
  res.status(201)
  res.json(newarticle)
}


module.exports = {
  getAllArticles,
  getArticlesByAuthor,
  getArticleById,
  createNewArticle,
};
