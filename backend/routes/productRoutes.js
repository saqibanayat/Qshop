const express = require('express');
const router = express.Router();

const { isAuthenticatedSeller, isAuthenticated } = require('../middleware/auth');
const upload = require('../middleware/multerConfig');
const { setproduct, getproduct, getproductbyid } = require('../controllers/productController');



router.post("/setproduct",isAuthenticatedSeller,upload.array('images', 4),setproduct);
router.get("/getproduct",isAuthenticatedSeller,getproduct);
router.get("/getproductbyid",isAuthenticatedSeller,getproductbyid);



module.exports = router;
