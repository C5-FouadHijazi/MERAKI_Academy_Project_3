const mongoose = require("mongoose");

const express = require("express");

const usersRouter = express.Router()
const  articelesRouter = express.Router()

const { register, createNewArticle ,getAllArticles} = require("../controllers/user");


usersRouter.post("/",register)
articelesRouter.post("/",createNewArticle)
articelesRouter.get("/",getAllArticles)


module.exports = usersRouter
module.exports = articelesRouter





