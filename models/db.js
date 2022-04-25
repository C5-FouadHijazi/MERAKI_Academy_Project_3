const mongoose = require('mongoose')

/* mongoose.connect("mongodb://localhost:27017/DB_toDos").then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
); */


mongoose.connect("mongodb://localhost:27017/project_3_v01").then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);