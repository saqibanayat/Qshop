const express = require('express');
const { registor, login, registorSeller, logout, getsellerprofile, setsellerprofile } = require('../controllers/userController');
const { isAuthenticatedSeller } = require('../middleware/auth');
const upload = require('../middleware/multerConfig');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const router = express.Router();





// Define the POST route for user registration
router.post('/register', registor);
router.post('/login', login);
router.post("/registerSeller",registorSeller);
router.get("/logout",catchAsyncErrors(logout));
router.get("/getsellerprofile",isAuthenticatedSeller,getsellerprofile);
router.post("/setsellerprofile",isAuthenticatedSeller,upload.single('image'),setsellerprofile);

module.exports = router;
