let articles = require("../models/articles");

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



module.exports = {
  getAllArticles,
  getArticlesByAuthor
};
