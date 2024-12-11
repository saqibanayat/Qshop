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
    type: String,
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
    ref: 'Seller', // Assuming there is a Seller model
    required: true
  },
  sizes: {
    type: [String], // Array of strings for multiple sizes
    required: true
  },
  flavors: {
    type: [String], // Array of strings for multiple flavors
    required: true
  },
  colors: {
    type: [String], // Array of strings for multiple colors
    required: true
  },
  images: {
    type: [String], // Array of image URLs or paths
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
