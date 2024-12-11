const User = require('../models/User');
const Seller = require('../models/Seller');
const bcrypt = require('bcryptjs');

const FavoriteProduct = require('../models/FavoriteProduct');
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { isAuthenticated,isAuthenticatedSeller } = require("../middleware/auth");
// const jwt = require("jsonwebtoken");
const path = require('path');
const express = require("express");
const Product = require('../models/Product');
const Order = require('../models/Order');
// const multer = require('multer');
const { getCart, addCartItem ,removeCartItem } = require('./cartController');
const router = express.Router();

// exportss.registerUser = async  = async (req, res)=> => {




  // router.post("/register",registor);
  // router.post("/registerSeller",registorSeller);
  // router.post("/login",login);
  // router.post("/setproduct",isAuthenticatedSeller,upload.array('images', 4),setproduct);
  // router.get("/getproduct",isAuthenticated,getproduct);
  // router.get("/getproductbyid",isAuthenticated,getproductbyid);
  // router.post("/setorder",isAuthenticated,setorder);
  // router.get("/getorderbyseller",isAuthenticatedSeller,getorderbyseller);

  // router.get("/getorderbyuser",isAuthenticated,getorderbycustomer);

  // router.get("/getsellerprofile",isAuthenticatedSeller,getsellerprofile);
  // router.post("/setsellerprofile",isAuthenticatedSeller,upload.single('image'),setsellerprofile);
  // load user
// router.get("/getseller",isAuthenticated,catchAsyncErrors(getseller));
// log out user
// router.get("/logout",catchAsyncErrors(logout));

// router.get("/getcart",isAuthenticated,getcart)
// router.post('/cart/items',isAuthenticated,addcartItem )

// router.get('/cart/items/:productId',isAuthenticated,removecartItem) 

// Add a favorite product
// router.post('/favorite', isAuthenticated,addFavoriteProduct);

// Get all favorite products for a user
// router.get('/favorite',isAuthenticated,getFavoriteProducts);
// 
// Remove a favorite product
// router.get('/favorite/:productId',isAuthenticated,removeFavoriteProduct);




  exports.registor = async (req, res) => {
    const { email, password, phone, personalInfo, address } = req.body;
  
    // Validation for required fields
    if (!email || !password || !phone) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }
  
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      user = new User({
        email,
        password: hashedPassword,
        phone,
        personalInfo,
        address,
      });
  
      await user.save();
      sendToken(user, 201, res);
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).send('Server error');
    }
  }
  exports.registorSeller = async (req, res)=> {
    const { email, password, phone, personalInfo, address,shopName } = req.body;
  
    // Validation for required fields
    if (!email || !password || !phone) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }
  
    try {
      let seller = await Seller.findOne({ email });
      if (seller) {
        return res.status(400).json({ msg: 'Seller already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      seller = new Seller({
        email,
        password: hashedPassword,
        phone,
        personalInfo,
        address,
        shopName:shopName,
      });
  
      await seller.save();
      sendToken(seller, 201, res);
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).send('Server error');
    }
  }


  exports.login = async (req, res)=> {
    const { email, password } = req.body;

    // Validation for required fields
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please provide email and password' });
    }

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        const seller = await Seller.findOne({ email });

        // If neither user nor seller found
        if (!user && !seller) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        let matchedUser; // This will hold the matched user or seller

        // Check password for user
        if (user) {
            const isMatchUser = await bcrypt.compare(password, user.password);
            if (isMatchUser) {
                matchedUser = user;
            }
        }

        // Check password for seller
        if (seller) {
            const isMatchSeller = await bcrypt.compare(password, seller.password);
            if (isMatchSeller) {
                matchedUser = seller;
            }
        }

        // If no valid user is matched
        if (!matchedUser) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Sending token as you did in registerUser
        sendToken(matchedUser, 200, res);
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).send('Server error');
    }
}


 exports.getseller= async (req, res, next)=> {
    try {
      const seller = await Seller.findById(req.seller);
      if (!seller) {
        return next(new ErrorHandler("Seller doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }

 exports.logout= async (req, res, next)=> {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successful!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
  




 exports.getsellerprofile= async (req, res, next)=> {
  try {
    const seller =req.seller;
    const sellerprofile = await Seller.findById(seller);
    const {personalInfo,email}=sellerprofile;
    const { firstName ,lastName,cellular,image}=personalInfo;
    if (!sellerprofile) {
      return next(new ErrorHandler("Seller doesn't exists", 400));
    }

    res.status(200).json({
      success: true,
      seller:{
        firstName,
        lastName,
        email,
        cellular,
        image
      }
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}
 exports.setsellerprofile = async (req, res)=> {
  const { firstName,lastName,email, password, phone,image } = req.body;
const sellerId=req.seller;
  // Validation for required fields
  if (!sellerId) {
    return res.status(400).json({ msg: 'Seller ID is required' });
  }

  try {
    // Find the seller by ID
    const seller = await Seller.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    // Update seller details
    const hashedPassword = await bcrypt.hash(password, 10);
    if (firstName !== undefined) seller.personalInfo.firstName = firstName;
    if (lastName !== undefined) seller.personalInfo.lastName = lastName;
    if (password !== undefined) seller.password = hashedPassword;
    if (phone !== undefined) seller.personalInfo.cellular = phone;
    if (phone !== undefined) seller.personalInfo.profilePicture = image;
    if (email !== undefined) seller.email = email;

    // Save the updated seller
    await seller.save();
    res.status(200).json({
      success: true,
      message:"profile update successfully"
    });
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).send('Server error');
  }
}

 exports.getcart = async (req, res)=> {
  try {
    const cart = await getCart(req.user);
    res.status(200).json(cart); // Respond with the cart in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message }); // Respond with error message
  }
};

// Route to add an item to the cart

 exports.addcartItem = async (req, res)=>  {
  const { productId, quantity } = req.body;
console.log(req.user);

  if (!productId || !quantity) {
    return res.status(400).json({ message: 'Product ID and quantity are required.' });
  }

  try {
    const cart = await addCartItem(req.user, productId, quantity);
    res.status(200).json(cart); // Respond with the updated cart in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message }); // Respond with error message
  }
};


 exports.removecartItem = async (req, res)=>{
  const { productId } = req.params;

  try {
    const cart = await removeCartItem(req.user, productId);
    res.status(200).json(cart); // Respond with the updated cart in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message }); // Respond with error message
  }
};



function generateOrderNumber() {
  // Implement your logic to generate a unique order number (e.g., UUID, timestamp + random number, etc.)
  return 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}

  
// exportss.loginUser = async  = async (req, res)=> => {















