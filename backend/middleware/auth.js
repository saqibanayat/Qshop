const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Seller = require("../models/Seller");
// const Shop = require("../model/shop");

exports.isAuthenticated = catchAsyncErrors(async(req,res,next) => {
    const token =   req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("🚀 ~ exports.isAuthenticated=catchAsyncErrors ~ token:", token)
    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);


    req.user = await User.findById(decoded.id);

    next();
});

exports.isAuthenticatedSeller = catchAsyncErrors(async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("🚀 ~ exports.isAuthenticatedSeller=catchAsyncErrors ~ token:", token)
 

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY_SELLER);
    

    const seller = await Seller.findById(decoded.id);
    if (!seller) {
        return next(new ErrorHandler("Seller not found", 404));
      }
    
      req.Seller = seller;
    next();
});



exports.isAdmin = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`${req.user.role} can not access this resources!`))
        };
        next();
    }
}