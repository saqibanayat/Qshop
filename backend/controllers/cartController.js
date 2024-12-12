const Cart = require('../models/Cart'); // Adjust the path as necessary
const Product = require('../models/Product'); // Adjust the path as necessary
// const { ObjectId } = require('mongoose').Types;

// Function to get the user's cart
exports.getcart = async (req, res)=> {  
  try {
  const userId=  req.user._id
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    res.status(200).json(cart || { items: [], totalPrice: 0 }); // Respond with the cart in JSON format

  } catch (error) {
    res.status(500).json({ message: error.message }); // Respond with error message
  }
}

// Function to add an item to the cart
exports.addcartItem = async (req, res)=>  {
  
  try { 
     const { productId, quantity } = req.body;
     const userId=  req.user._id

    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $addToSet: { items: { product: productId, quantity } } },
      { new: true, upsert: true } // Create a new cart if it doesn't exist
    );

    // Optionally, you can recalculate the total price here
    await updateTotalPrice(cart);
    res.status(200).json(cart); 
  } catch (error) {
    res.status(500).json({ message: error.message });  }
}

// Function to remove an item from the cart
exports.removecartItem = async (req, res) => {
  const { productId, quantity } = req.body; // Get productId and quantity from request body
  const userId = req.user._id; // Get user ID from request

  try {
  
    // Find the cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found.' });
    }

    // Find the item in the cart
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart.' });
    }

    const item = cart.items[itemIndex];

    if (item.quantity > quantity) {
      // Decrease the quantity
      cart.items[itemIndex].quantity -= quantity;
    } else {
      // Remove the item if quantity to decrease is equal to or exceeds current quantity
      cart.items.splice(itemIndex, 1);
    }

    // Recalculate the total price
    await updateTotalPrice(cart);

    // Save the updated cart
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Helper function to update the total price of the cart
async function updateTotalPrice(cart) {
  const totalPrice = await Promise.all(cart.items.map(async (item) => {
    const product = await Product.findById(item.product);
    return product.price * item.quantity;
  }));

  cart.totalPrice = totalPrice.reduce((acc, curr) => acc + curr, 0);
  await cart.save();
}

