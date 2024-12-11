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

 exports.getproduct= async(req, res,next)=> {
    try {
      
     const seller= req.Seller?._id
      const product = await Product.find({seller});

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
