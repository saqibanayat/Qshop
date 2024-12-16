const Cart = require('../models/Cart'); // Adjust the path as necessary
const Product = require('../models/Product'); // Adjust the path as necessary
// const { ObjectId } = require('mongoose').Types;

// Function to get the user's cart
exports.getcart = async (req, res) => {
  try {
    const userId = req.user._id;

    // Populate both `items.product` and the nested `seller` field
    const cart = await Cart.findOne({ user: userId }).populate({
      path: 'items.product',
      populate: {
        path: 'seller',
        select: 'personalInfo', // Include only firstName and lastName
      },
    });

    res.status(200).json(cart || { items: [], totalPrice: 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Function to add an item to the cart
exports.addcartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // If no cart exists for the user, create a new cart
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });

      await cart.save();
      // Update the total price for the new cart
      await updateTotalPrice(cart);
      return res.status(200).json({success:true,cart});
    }

    // Check if the product already exists in the cart
    const existingProductIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingProductIndex !== -1) {
      // Product exists in the cart, update its quantity
      cart.items[existingProductIndex].quantity += quantity;
    } else {
      
      cart.items.push({ product: productId, quantity });
    }

 
    await cart.save();

    
    await updateTotalPrice(cart);

    res.status(200).json({success:true,cart});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
  console.log('enter here' ,cart);
  
  const totalPrice = await Promise.all(cart.items.map(async (item) => {
    const product = await Product.findById(item.product._id);
    return product.price * item.quantity;
  }));

  cart.totalPrice = totalPrice.reduce((acc, curr) => acc + curr, 0);
  await cart.save();
}

