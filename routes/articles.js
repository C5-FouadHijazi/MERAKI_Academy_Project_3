const express = require("express");

const { getAllArticles,getArticleByAuthor ,getArticleByID,createNewArticle,updateArticleById ,deleteArticleById,deleteArticlesByAuthor,createNewComment} = require("../controllers/articles");

 
// create articles router
const articlesRouter = express.Router();

 
// endpoint for the GET request
articlesRouter.get("/", getAllArticles);

articlesRouter.get("/search-1", getArticleByAuthor);

articlesRouter.get("/search-2", getArticleByID);

articlesRouter.post("/", createNewArticle);
articlesRouter.put("/:id", updateArticleById);
articlesRouter.delete("/:id", deleteArticleById);

articlesRouter.delete("/", deleteArticlesByAuthor);
articlesRouter.post("/:article_id/comments", createNewComment);

module.exports = articlesRouter