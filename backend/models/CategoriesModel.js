const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Category Schema
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;