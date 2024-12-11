const Cart = require('../models/Cart'); // Adjust the path as necessary
const Product = require('../models/Product'); // Adjust the path as necessary
const { ObjectId } = require('mongoose').Types;

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
exports.removecartItem = async (req, res)=>{
  const { productId } = req.params;
  const userId=  req.user._id

  try {
    const validId = new ObjectId(productId);
    if (!ObjectId.isValid(validId)) {
      return res.status(400).json({ message: 'Invalid product ID.' });
    }
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: ObjectId(validId) } } },
      { new: true } // Return the updated cart
    );

    // Optionally, you can recalculate the total price here
    await updateTotalPrice(cart);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });  }
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

