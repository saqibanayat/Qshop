const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Cart Item Schema
const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1 // Ensure quantity is at least 1
  }
}, { timestamps: true });

// Define the Cart Schema
const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming there is a User model
    required: true
  },
  items: [CartItemSchema], // Array of cart items
  totalPrice: {
    type: Number,
    default: 0 // Total price of all items in the cart
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Create the Cart model
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
