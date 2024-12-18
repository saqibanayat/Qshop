const express = require('express');
const { isAuthenticated, isAuthenticatedSeller } = require('../middleware/auth');
const { setorder, getorderbyseller, getorderbycustomer, createStripeCustomer, createSetupIntent, savePaymentMethod, executePayment, getSavedPaymentMethods } = require('../controllers/orderController');
const { getcart, addcartItem, removecartItem } = require('../controllers/cartController');
const router = express.Router();

router.post("/setorder",isAuthenticated,setorder);
router.post('/create-stripe-customer',isAuthenticated,createStripeCustomer)
router.get('/create-setup-intent',isAuthenticated,createSetupIntent)
router.post('/save-payment-method',isAuthenticated,savePaymentMethod)
router.post('/execute-payment',isAuthenticated,executePayment)
router.get('/get-saved-payment-method',isAuthenticated,getSavedPaymentMethods)

router.get("/getorderbyseller",isAuthenticatedSeller,getorderbyseller);

router.get("/getorderbyuser",isAuthenticated,getorderbycustomer);
router.get('/getcart',isAuthenticated,getcart);
router.post('/addcartitem',isAuthenticated,addcartItem);
router.post('/removecartitem',isAuthenticated,removecartItem);
module.exports = router;