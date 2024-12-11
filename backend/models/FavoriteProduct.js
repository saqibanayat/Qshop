const mongoose = require('mongoose');

// Favorite Product Schema
const favoriteProductSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  addedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('FavoriteProduct', favoriteProductSchema);
