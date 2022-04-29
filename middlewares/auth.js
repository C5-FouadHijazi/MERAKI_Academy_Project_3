const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { status } = require("express/lib/response");

//Authuntication nedded
const authentication = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    console.log("helllloo");
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }
  const token = req.headers.authorization.split(" ")[1];
  console.log("token: ", token);

  jwt.verify(token, process.env.SECRET, (err, result) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "The token is invalid or expired",
      });
    } else {
      req.token = result;
      next();
    }

  });
};

module.exports = { authentication };
