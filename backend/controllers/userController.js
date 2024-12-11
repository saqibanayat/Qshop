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
const multer = require('multer');
const { getCart, addCartItem ,removeCartItem } = require('./cartController');
const router = express.Router();

// exports.registerUser = async (req, res) => {

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/'); // Specify the directory to save the file
    },
    filename: function (req, file, cb) {
      const baseUrl= "http://127.0.0.1:3000/images/"
      const name=Date.now()+Math.round(Math.random()*10000)+path.extname(file.originalname)
      const fileLink=baseUrl+name;
      if(!Array.isArray(req.body.images))
        req.body.images=[]

      req.body.images.push(fileLink);
      req.body.image = fileLink;
      cb(null,name); // Generate a unique filename
    }
  });

  const upload = multer({ storage: storage });

  router.post("/register",registor);
  router.post("/registerSeller",registorSeller);
  router.post("/login",login);
  router.post("/setproduct",isAuthenticatedSeller,upload.array('images', 4),setproduct);
  router.get("/getproduct",isAuthenticated,getproduct);
  router.get("/getproductbyid",isAuthenticated,getproductbyid);
  router.post("/setorder",isAuthenticated,setorder);
  router.get("/getorderbyseller",isAuthenticatedSeller,getorderbyseller);

  router.get("/getorderbyuser",isAuthenticated,getorderbycustomer);

  router.get("/getsellerprofile",isAuthenticatedSeller,getsellerprofile);
  router.post("/setsellerprofile",isAuthenticatedSeller,upload.single('image'),setsellerprofile);
  // load user
router.get("/getseller",isAuthenticated,catchAsyncErrors(getseller));
// log out user
router.get("/logout",catchAsyncErrors(logout));

router.get("/getcart",isAuthenticated,getcart)
router.post('/cart/items',isAuthenticated,addcartItem )

router.get('/cart/items/:productId',isAuthenticated,removecartItem) 

// Add a favorite product
router.post('/favorite', isAuthenticated,addFavoriteProduct);

// Get all favorite products for a user
router.get('/favorite',isAuthenticated,getFavoriteProducts);

// Remove a favorite product
router.get('/favorite/:productId',isAuthenticated,removeFavoriteProduct);




  async function registor(req, res) {
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
  async function registorSeller(req, res) {
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


  async function login(req, res) {
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


  async function getseller(req, res, next) {
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

async function logout(req, res, next) {
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
  

  async function setproduct(req, res) {

    const { name, description,price,category,quantity, sizes, flavors, colors,images } = req.body;
    const seller=req.seller;
    console.log(req.body);
    // Validation for required fields
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

  async function getproduct(req, res,next) {
    try {
      const product = await Product.find();

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
  async function getproductbyid(req, res, next) {
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

  async function getorderbyseller(req, res, next)
  {
    try {
      const seller=req.seller;
      const orders = await Order.find({ seller: seller }).populate('items.product').populate('customer').populate('seller');
      if (!orders) {
        return next(new ErrorHandler("Order doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
  async function getorderbycustomer(req, res, next)
  {
    try {
      const user=req.user;
      const orders = await Order.find({ customer: user }).populate('items.product').populate('customer').populate('seller');
      if (!orders) {
        return next(new ErrorHandler("Order doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
  async function setorder(req, res, next)
  {
    const { items, address,card,coupon,paymentmethod } = req.body; // Removed card and coupon for simplicity
    const user=req.user; //req.user;
    console.log(req.body)
    if (!items || !address ) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }
    
  // Group items by seller
  const ordersBySeller = {};

  // Fetch product details for all items in one go
  const productIds = items.map(item => item._id);
  const products = await Product.find({ _id: { $in: productIds } });

  // Organize products by seller and prepare the order items
  for (const item of items) {
    const { _id, quantity } = item; // Get only id and quantity from item
    const product = products.find(p => p._id.toString() === _id);

    if (!product) {
      throw new Error(`Product not found for ID: ${_id}`);
    }

    const sellerId = product.seller; // Assuming the product has a seller field

    if (!ordersBySeller[sellerId]) {
      ordersBySeller[sellerId] = [];
    }

    ordersBySeller[sellerId].push({
      product: _id,
      quantity,
      price: product.price // Get price from product
    });
  }

  const orders = [];
  for (const sellerId in ordersBySeller) {
    const orderItems = ordersBySeller[sellerId];
    const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderNumber = generateOrderNumber(); // Implement your logic to generate unique order numbers
    const shipping=100;
    const order = new Order({
      orderNumber,
      customer: user,
      seller: sellerId,
      items: orderItems,
      totalAmount:totalAmount+shipping,
      shippingAddress: address,
    });

    orders.push(order);
  }

  try {
    await Order.insertMany(orders);
    console.log('Orders created successfully:', orders);
    return res.status(200).json({
      success: true,
      msg: 'Order succussfully'}
    );
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).send('Server error');
  }
}

async function getsellerprofile(req, res, next) {
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
async function setsellerprofile(req, res) {
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

async function getcart(req, res) {
  try {
    const cart = await getCart(req.user);
    res.status(200).json(cart); // Respond with the cart in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message }); // Respond with error message
  }
};

// Route to add an item to the cart

async function addcartItem(req, res)  {
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


async function removecartItem(req, res){
  const { productId } = req.params;

  try {
    const cart = await removeCartItem(req.user, productId);
    res.status(200).json(cart); // Respond with the updated cart in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message }); // Respond with error message
  }
};

// Add a favorite product
async function addFavoriteProduct(req, res){
  try {
    const { productId } = req.body;
    const user = req.user;

    // Check if the product is already favorited by the user
    const existingFavorite = await FavoriteProduct.findOne({user, productId });

    if (existingFavorite) {
      return res.status(400).json({ success: false, message: 'Product already in favorites.' });
    }

    // Add to favorites
    const favorite = await FavoriteProduct.create({ user, productId });
    res.status(201).json({ success: true, data: favorite });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all favorite products for a user
async function getFavoriteProducts(req, res) {
  try {
    const { productId } = req.params;
    const user = req.user;

    // Retrieve all favorites for the user
    const favorites = await FavoriteProduct.find({ user }).populate('productId');
    res.status(200).json({ success: true, data: favorites });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove a favorite product
async function removeFavoriteProduct(req, res) {
  try {
    const {productId } = req.params;
    const user = req.user;

    // Remove the product from favorites
    const removed = await FavoriteProduct.findOneAndDelete({user, productId });

    if (!removed) {
      return res.status(404).json({ success: false, message: 'Favorite product not found.' });
    }

    res.status(200).json({ success: true, message: 'Product removed from favorites.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


function generateOrderNumber() {
  // Implement your logic to generate a unique order number (e.g., UUID, timestamp + random number, etc.)
  return 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}

  
// exports.loginUser = async (req, res) => {















module.exports = router;