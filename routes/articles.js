const express = require("express");
const { getAllArticles , getArticlesByAuthor } = require("../controllers/articles");


// create articles router
const articlesRouter = express.Router();

// endpoint for the GET request
articlesRouter.get("/", getAllArticles);

articlesRouter.get("/search_1" , getArticlesByAuthor)


module.exports = articlesRouter;
