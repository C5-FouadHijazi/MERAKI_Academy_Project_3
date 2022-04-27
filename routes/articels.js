const express = require("express");
const { getAllArticles,getArticlesByAuthor ,getArticleById,createNewArticle,updateArticleById ,deleteArticleById,deleteArticlesByAuthor,/* createNewComment */} = require("../controllers/articles");

 
// create articles router
const articlesRouter = express.Router();

 
// endpoint for the GET request
articlesRouter.get("/", getAllArticles);

articlesRouter.get("/search_1", getArticlesByAuthor);

articlesRouter.get("/search_2", getArticleById);

articlesRouter.post("/", createNewArticle);

articlesRouter.put("/:id", updateArticleById);

articlesRouter.delete("/:id", deleteArticleById);

articlesRouter.delete("/", deleteArticlesByAuthor);
/* 
articlesRouter.post("/:article_id/comments", createNewComment); */

module.exports = articlesRouter;