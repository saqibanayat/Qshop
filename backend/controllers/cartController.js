const Cart = require('../models/Cart'); // Adjust the path as necessary
const Product = require('../models/Product'); // Adjust the path as necessary

// Function to get the user's cart
async function getCart(userId) {
  try {
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    return cart || { items: [], totalPrice: 0 }; // Return an empty cart if none exists
  } catch (error) {
    throw new Error('Error fetching cart: ' + error.message);
  }
}

// Function to add an item to the cart
async function addCartItem(userId, productId, quantity) {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $addToSet: { items: { product: productId, quantity } } },
      { new: true, upsert: true } // Create a new cart if it doesn't exist
    );

    // Optionally, you can recalculate the total price here
    await updateTotalPrice(cart);
    return cart;
  } catch (error) {
    throw new Error('Error adding item to cart: ' + error.message);
  }
}

// Function to remove an item from the cart
async function removeCartItem(userId, productId) {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true } // Return the updated cart
    );

    // Optionally, you can recalculate the total price here
    await updateTotalPrice(cart);
    return cart;
  } catch (error) {
    throw new Error('Error removing item from cart: ' + error.message);
  }
}

// Helper function to update the total price of the cart
async function updateTotalPrice(cart) {
  const totalPrice = await Promise.all(cart.items.map(async (item) => {
    const product = await Product.findById(item.product);
    return product.price * item.quantity;
  }));

  cart.totalPrice = totalPrice.reduce((acc, curr) => acc + curr, 0);
  await cart.save();
}

module.exports = { getCart, addCartItem, removeCartItem };
