const mongoose = require("mongoose");

const express = require("express");

const usersRouter = express.Router();

const { register,login } = require("../controllers/user");

usersRouter.post("/", register);
usersRouter.post("/login", login);

module.exports = usersRouter;