
  const mongoose = require("mongoose");
  

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true},
    commenter:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  });


  const comment = mongoose.model("Comment", commentSchema);


  module.exports = comment
  