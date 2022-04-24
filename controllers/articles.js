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
    return element.id == req.query.id
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

 const updateArticleById = (req ,res) => {
  const found = articles.find((element, index)=>{
    return element.id == req.params.id
  }) 
    found.author = req.body.author 
    found.title = req.body.title 
    found.description = req.body.description
    
    res.status(200)
    res.json(found)
  } 

  
  const deleteArticleById = (req ,res) => {
    let deletedItem = {};
    let i;
    console.log(req.params.id);
    const found = articles.find((element, index) => {
      i = index;
      return element.id == req.body.id;
    });
    if (found) {
      deletedItem = articles[i];
      articles.splice(i, 1)
      res.status(200);
      res.json({
        success: true,
        message: `Succeeded to delete article with id: ${req.params.id}`,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Failed to delete article with id:_${req.params.id}`,
      });
      console.log("not found");
    }
  }
  

  const deleteArticlesByAuthor = (req ,res) => {
    //let deletedItem = {};
    //let i;
    //const found and using find //??
    articles = articles.filter((element, index) => {
      //i = index;
      return element.author !== req.body.author;
    });
    if (articles) {
      res.status(200);
      res.json({
        success: true,
        message: `Succeeded to delete article with id: ${req.body.id}`,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Failed to delete article with id:_${req.body.id}`,
      });
      console.log("not found");
    }
  }


 

module.exports = {
  getAllArticles,
  getArticlesByAuthor,
  getArticleById,
  createNewArticle,
  updateArticleById,
  deleteArticleById,
  deleteArticlesByAuthor,
};
