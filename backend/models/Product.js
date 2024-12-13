const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category', 
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller', 
    required: true
  },
  sizes: {
    type: [String], 
    required: true
  },
  flavors: {
    type: [String], 
    required: true
  },
  colors: {
    type: [String], // Array of strings for multiple colors
    required: true
  },
  images: {
    type: [String], 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Create the Product model
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
