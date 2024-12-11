const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  personalInfo: {
    firstName: String,
    lastName: String,
    birthDate: Date,
    age: Number,
    gender: String,
    cellular: String,
    documentType: String,
    dni: String,
  },
  address: {
    department: String,
    province: String,
    district: String,
    street: String,
    number: String,
    references: String,
  },
  role:{
    type: String,
    default: "user",
  },
  createdAt:{
    type: Date,
    default: Date.now(),
   },
}, { timestamps: true });




// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id}, process.env.JWT_SECRET_KEY,{
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = mongoose.model('User', userSchema);
