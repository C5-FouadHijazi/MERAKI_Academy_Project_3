const mongoose = require("mongoose");



const articleSchema = new mongoose.Schema({
    title: { type: String, required: true},
    ddescription: {type:String , required:true},
    author:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required : true },
    commenter:  { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },

  });

  const article = mongoose.model("Article", articleSchema);
  
  module.exports = article



