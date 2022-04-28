const express = require("express");
//dotenv
require("dotenv").config();
//jsonwebtoken
const jwt = require("jsonwebtoken");
//bcrypt
const bcrypt = require("bcrypt");

// import  DataB
const db = require("./models/db");

const app = express();

app.use(express.json());



// import  Routers

/* const articlesRouter = require("./routes/articels"); */

const usersRouter = require("./routes/users");
const articlesRouter = require("./routes/articles"); 

//The Routers

app.use("/users", usersRouter);

app.use("/articles", articlesRouter);





const PORT = 8000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT http://localhost:${PORT}`);
});
