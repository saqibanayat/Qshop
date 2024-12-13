const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { addFavoriteProduct, getFavoriteProducts, removeFavoriteProduct } = require('../controllers/favoriteController');
const router = express.Router();



router.post('/addfavorite', isAuthenticated,addFavoriteProduct);

router.get('/getfavorite',isAuthenticated,getFavoriteProducts);

router.get('/removefavorite',isAuthenticated,removeFavoriteProduct);

module.exports = router;