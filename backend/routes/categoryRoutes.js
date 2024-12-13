const express = require('express');
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoriesController');

const router = express.Router();



router.post('/addcategory',createCategory);

router.get('/getcategory',getCategories);

router.post('/updatecategory',updateCategory);
router.delete('/deletecategory',deleteCategory);

module.exports = router;