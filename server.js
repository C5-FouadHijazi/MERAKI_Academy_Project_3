const express = require("express");
const app = express();

app.use(express.json());

// import  DataB
const db = require("./models/db");

// import  Routers
/* const articlesRouter = require("./routes/articels"); */

const usersRouter = require("./routes/user");
const articlesRouter = require("./routes/user"); 

//The Routers

app.use("/users", usersRouter);

app.use("/articles", articlesRouter);





const PORT = 4000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT http://localhost:${PORT}`);
});
