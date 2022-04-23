const express = require("express");
const { getAllArticles , getArticlesByAuthor, getArticleById } = require("../controllers/articles");


// create articles router
const articlesRouter = express.Router();

// endpoint for the GET request
articlesRouter.get("/", getAllArticles);

articlesRouter.get("/search_1" , getArticlesByAuthor)

articlesRouter.get("/search_2" , getArticleById)


module.exports = articlesRouter;
