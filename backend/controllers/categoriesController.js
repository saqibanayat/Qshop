
const Category = require("../models/CategoriesModel");

exports.createCategory = async (req, res) => {
    try {
      const { name, description } = req.body;
      const category = new Category({ name, description });
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.updateCategory = async (req, res) => {
    try {
     
      const {id, name, description } = req.body;
      const category = await Category.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
      );
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.deleteCategory = async (req, res) => {
    try {
      const { id } = req.query;
      await Category.findByIdAndDelete(id);
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  