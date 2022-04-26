const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: {type : Number},
    country: { type: String },
    email: { type: String, required: true ,unique: true },
    password: { type: String, required: true, unique: true },
  });

  userSchema.pre("save",function(){

    this.email=this.email.toLowerCase()
    })
    


  const user = mongoose.model("User", userSchema);


  module.exports = user
  