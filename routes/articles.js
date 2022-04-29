const express = require("express");

const { getAllArticles,getArticleByAuthor ,getArticleByID,createNewArticle,updateArticleById ,deleteArticleById,deleteArticlesByAuthor,createNewComment,} = require("../controllers/articles");

const {authentication } = require("../middlewares/auth")
 
// create articles router
const articlesRouter = express.Router();

 
// endpoint for the GET request
articlesRouter.get("/", getAllArticles);

articlesRouter.get("/search_1", getArticleByAuthor);

articlesRouter.get("/search_2", getArticleByID);

articlesRouter.post("/", authentication ,createNewArticle);

articlesRouter.put("/:id", updateArticleById);

articlesRouter.delete("/:id", deleteArticleById);

articlesRouter.delete("/", deleteArticlesByAuthor);

articlesRouter.post("/:article_id/comments",authentication ,createNewComment);

module.exports = articlesRouter