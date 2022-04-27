const mongoose = require("mongoose");

const express = require("express");

const usersRouter = express.Router()
const  articelesRouter = express.Router()

const { register, createNewArticle ,getAllArticles,getArticlesByAuthor,getArticleById} = require("../controllers/user");


usersRouter.post("/",register)
articelesRouter.post("/",createNewArticle)
articelesRouter.get("/",getAllArticles)
articelesRouter.get("/search_1",getArticlesByAuthor)
articelesRouter.get("/search_2",getArticleById)



module.exports = usersRouter
module.exports = articelesRouter





