const Product = require("../models/Product");
const ErrorHandler = require("../utils/ErrorHandler");




exports.setproduct = async (req, res)=> {

    const { name, description,price,category,quantity, sizes, flavors, colors,images } = req.body;
  
    const seller= req.Seller?._id;
  
    if (!name || !description ) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }
  
    try {
  
  
      const product = new Product({
        name,
        description,
        category,
        price,
        quantity,
        seller,
        sizes,
        flavors,
        colors,
        images
      });
      await product.save();

      return res.status(200).json({
        success: true,
        msg: 'Product publish succussfully'}
      );
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).send('Server error');
    }
  }


  
  exports.getProducts = async (req, res, next) => {
    try {
      const { category, seller } = req.query; 
  
      const query = {};
      if (category) query.category = category; 
      if (seller) query.seller = seller;     
  
      const products = await Product.find(query).populate('category', 'name'); 
  
      // Handle case where no products are found
      if (!products || products.length === 0) {
        return next(new ErrorHandler("No products found", 404));
      }
  
      // Return the products
      res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  };
  
  
 exports.getproductbyid= async (req, res, next)=> {
    try {
      const product = await Product.findById(req.query.id);

      if (!product) {
        return next(new ErrorHandler("Product doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }

  exports.editProduct = async (req, res) => {
    const { id } = req.query; 
    const { name, description, price, category, quantity, sizes, flavors, colors, images } = req.body;
    const seller = req.Seller?._id; 
  
    if (!id) {
      return res.status(400).json({ msg: 'Product ID is required' });
    }
  
    try {
      // Find product by ID and ensure it belongs to the seller
      const product = await Product.findOne({ _id: id, seller });
      if (!product) {
        return res.status(404).json({ msg: 'Product not found or unauthorized access' });
      }
  
      // Update product fields if provided
      if (name !== undefined) product.name = name;
      if (description !== undefined) product.description = description;
      if (price !== undefined) product.price = price;
      if (category !== undefined) product.category = category;
      if (quantity !== undefined) product.quantity = quantity;
      if (sizes !== undefined) product.sizes = sizes;
      if (flavors !== undefined) product.flavors = flavors;
      if (colors !== undefined) product.colors = colors;
      if (images !== undefined) product.images = images;
  
      await product.save();
  
      res.status(200).json({
        success: true,
        msg: 'Product updated successfully',
        product
      });
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).send('Server error');
    }
  };
  


  exports.deleteProduct = async (req, res) => {
    const { id } = req.query; 
    const seller = req.Seller?._id; 
  
    if (!id) {
      return res.status(400).json({ msg: 'Product ID is required' });
    }
  
    try {
      // Find and delete the product that belongs to the seller
      const product = await Product.findOneAndDelete({ _id: id, seller });
      if (!product) {
        return res.status(404).json({ msg: 'Product not found or unauthorized access' });
      }
  
      res.status(200).json({
        success: true,
        msg: 'Product deleted successfully'
      });
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).send('Server error');
    }
  };
  