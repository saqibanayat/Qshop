const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Order Schema
const OrderSchema = new Schema({
  
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming there is a User model
    required: true
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller', // Assuming there is a Seller model
    required: true
  },
  items: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product', // Assuming there is a Product model
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true
    }
  }],
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'canceled'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  shippingAddress: {
    department: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    references: {
      type: String,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Order model
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
