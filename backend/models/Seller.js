const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

// Define the Seller Schema
const SellerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  personalInfo: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    profilePicture:{
      type:String
    },
    birthDate: {
      type: Date
    },
    age: {
      type: Number
    },
    gender: {
      type: String
    },
    cellular: {
      type: String
    },
    documentType: {
      type: String
    },
    dni: {
      type: String
    }
  },
  address: {
    departamento: {
      type: String
    },
    provincia: {
      type: String
    },
    distrito: {
      type: String
    },
    calle: {
      type: String
    },
    numero: {
      type: String
    },
    referencias: {
      type: String
    }
  },
  shopName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'seller'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

SellerSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET_KEY_SELLER,{
      expiresIn: process.env.JWT_EXPIRES,
    });
  };
  

// Create the Seller model
const Seller = mongoose.model('Seller', SellerSchema);

module.exports = Seller;
