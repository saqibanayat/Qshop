const express = require('express');
const router = express.Router();

const { isAuthenticatedSeller, isAuthenticated } = require('../middleware/auth');
const upload = require('../middleware/multerConfig');
const { setproduct, getproductbyid, editProduct, deleteProduct, getProducts } = require('../controllers/productController');



router.post("/setproduct",isAuthenticatedSeller,upload.array('images', 4),setproduct);
router.get("/getproduct",getProducts);
router.get("/getproductbyid",getproductbyid);
router.put('/editproduct', isAuthenticatedSeller, upload.array('images', 4),editProduct);
router.delete('/deleteproduct', isAuthenticatedSeller, deleteProduct);


module.exports = router;
