//Get Mongoose
const mongoose = require("mongoose");

//Get Schema from mongoose
const Schema = mongoose.Schema;

//Password Hashing
const bcrypt = require("bcrypt");

//validator for email
const validator = require("validator");

//Create the model using Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });

  //validation
  if (!email || !password) {
    throw Error("All fields must be filled!!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough!!");
  }

  if (exists) {
    throw Error("Email already in use!");
  }

  //Add salt to avoid password matching
  const salt = await bcrypt.genSalt(10);

  //hash the password with salt
  const hashed_password = await bcrypt.hash(password, salt);

  //pass the values to add data to DB
  const user = await this.create({ email, password: hashed_password });

  return user;
};

module.exports = mongoose.model("User", userSchema);
