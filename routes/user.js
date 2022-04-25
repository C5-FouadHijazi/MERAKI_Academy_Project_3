const mongoose = require("mongoose");

const express = require("express");

const usersRouter = express.Router()


const { register} = require("../controllers/user");


usersRouter.post("/",register)

module.exports = usersRouter




