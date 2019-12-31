const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
//this file is for the creation of the user on the database.
const WorkOutSchema = new Schema({
  date: {
    type: String,
    default: ""
  },
  exercise: {
    type: String,
    default: ""
  },
  sets:{
      type: String,
      default: ""
  },
  reps:{
      type: String,
      default: ""
  },
  weight:{
      type: String,
      default: ""
  }
});

const workout = mongoose.model("WorkOuts", WorkOutSchema);

module.exports = workout;
