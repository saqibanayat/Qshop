const express = require('express');
const { isAuthenticated, isAuthenticatedSeller } = require('../middleware/auth');
const { setorder, getorderbyseller, getorderbycustomer } = require('../controllers/orderController');
const { getcart, addcartItem, removecartItem } = require('../controllers/cartController');
const router = express.Router();

router.post("/setorder",isAuthenticated,setorder);
router.get("/getorderbyseller",isAuthenticatedSeller,getorderbyseller);

router.get("/getorderbyuser",isAuthenticated,getorderbycustomer);
router.get('/getcart',isAuthenticated,getcart);
router.post('/addcartitem',isAuthenticated,addcartItem);
router.post('/removecartitem',isAuthenticated,removecartItem);
module.exports = router;