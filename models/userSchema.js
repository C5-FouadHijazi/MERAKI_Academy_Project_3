const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: {type : Number},
    country: { type: String },
    email: { type: String, required: true ,unique: true },
    password: { type: String, required: true },
  });

  /* JO9DHBHO0110000178334600105001
  *//*   {
    "fisrtName" : "Maies",
    "lastName" : "Hijazi",
    "age" : 32,
    "contry" : "Jordan",
    "email" : "Maies",
    "password" : "123456"
    } */
    
//*P3.A Login [Level 2]
  userSchema.pre("save",async function(){
    const salt = 10;
  const hashpassword= await bcrypt.hash( this.password, salt);
    this.email=this.email.toLowerCase()
    this.password=hashpassword
})


const user = mongoose.model("User", userSchema);
module.exports = user