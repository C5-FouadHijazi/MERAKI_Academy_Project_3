let articles = require("../models/articles");

// 1. this function return all articles
const getAllArticles = (req, res) => {
  res.status(200).json(articles);
};

module.exports = {
  getAllArticles,
};
