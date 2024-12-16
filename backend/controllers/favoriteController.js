const FavoriteProduct = require("../models/FavoriteProduct");

// Add a favorite product
exports.addFavoriteProduct = async (req, res)=>{
    try {
      const { productId } = req.body;
      const user = req.user._id;
  
      // Check if the product is already favorited by the user
      const existingFavorite = await FavoriteProduct.findOne({user, productId });
  
      if (existingFavorite) {
        return res.status(400).json({ success: false, message: 'Product already in favorites.' });
      }
  
      // Add to favorites
      const favorite = await FavoriteProduct.create({ userId:user, productId });
      res.status(201).json({ success: true, data: favorite });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Get all favorite products for a user
   exports.getFavoriteProducts = async (req, res)=> {
    try {
      const user = req.user._id;
  
      // Retrieve all favorites for the user
      const favorites = await FavoriteProduct.find({  userId:user, }).populate({
        path: 'productId',
        populate: {
          path: 'category',
          select: 'name',
        },
      });
      res.status(200).json({ success: true, data: favorites });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Remove a favorite product
   exports.removeFavoriteProduct = async (req, res)=> {
    try {
      const {productId } = req.query;
      const user = req.user._id;
  console.log('productId',productId, user);
  
      // Remove the product from favorites
      const removed = await FavoriteProduct.findOneAndDelete({userId:user, productId });
  
      if (!removed) {
        return res.status(404).json({ success: false, message: 'Favorite product not found.' });
      }
  
      res.status(200).json({ success: true, message: 'Product removed from favorites.' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  