const mongoose = require("mongoose");

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
  userSchema.pre("save",function(){
//hash
const hashFun = async (password) => {
  console.log(password);
  const salt = 10;

  const hashedPassword = await bcrypt.hash(password, salt);
 
  bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log("compare result: ", result);
  });
}; 
    this.email=this.email.toLowerCase()
    })

  const user = mongoose.model("User", userSchema);


  module.exports = user
  