const Order = require("../models/Order");
const Product = require("../models/Product");
const ErrorHandler = require("../utils/ErrorHandler");

exports.getorderbyseller= async (req, res, next)=>
    {
      try {
        const seller=req.seller;
        const orders = await Order.find({ seller: seller }).populate('items.product').populate('customer').populate('seller');
        if (!orders) {
          return next(new ErrorHandler("Order doesn't exists", 400));
        }
  
        res.status(200).json({
          success: true,
          orders,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
   exports.getorderbycustomer= async (req, res, next)=>
    {
      try {
        const user=req.user;
        const orders = await Order.find({ customer: user }).populate('items.product').populate('customer').populate('seller');
        if (!orders) {
          return next(new ErrorHandler("Order doesn't exists", 400));
        }
  
        res.status(200).json({
          success: true,
          orders,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
   exports.setorder= async (req, res, next)=>
    {
      const { items, address,card,coupon,paymentmethod } = req.body; // Removed card and coupon for simplicity
      const user=req.user; //req.user;
      console.log(req.body)
      if (!items || !address ) {
        return res.status(400).json({ msg: 'Please provide all required fields' });
      }
      
    // Group items by seller
    const ordersBySeller = {};
  
    // Fetch product details for all items in one go
    const productIds = items.map(item => item._id);
    const products = await Product.find({ _id: { $in: productIds } });
  
    // Organize products by seller and prepare the order items
    for (const item of items) {
      const { _id, quantity } = item; // Get only id and quantity from item
      const product = products.find(p => p._id.toString() === _id);
  
      if (!product) {
        throw new Error(`Product not found for ID: ${_id}`);
      }
  
      const sellerId = product.seller; // Assuming the product has a seller field
  
      if (!ordersBySeller[sellerId]) {
        ordersBySeller[sellerId] = [];
      }
  
      ordersBySeller[sellerId].push({
        product: _id,
        quantity,
        price: product.price // Get price from product
      });
    }
  
    const orders = [];
    for (const sellerId in ordersBySeller) {
      const orderItems = ordersBySeller[sellerId];
      const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const orderNumber = generateOrderNumber(); // Implement your logic to generate unique order numbers
      const shipping=100;
      const order = new Order({
        orderNumber,
        customer: user,
        seller: sellerId,
        items: orderItems,
        totalAmount:totalAmount+shipping,
        shippingAddress: address,
      });
  
      orders.push(order);
    }
  
    try {
      await Order.insertMany(orders);
      console.log('Orders created successfully:', orders);
      return res.status(200).json({
        success: true,
        msg: 'Order succussfully'}
      );
    } catch (error) {
      console.error('Server error:', error.message);
      res.status(500).send('Server error');
    }
  }