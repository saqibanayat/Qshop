const Order = require("../models/Order");
const Product = require("../models/Product");
const ErrorHandler = require("../utils/ErrorHandler");
  const stripe = require('stripe')("sk_test_51NgSA1CYVog714gF2YZ4E38BliPzj3ZovONskoLHXaU5dNwvu0IaAFQcoI9mnOZZU5HooWDsg2hxyGkWMw5PTMt600Jc7VkpUe")


  function generateOrderNumber() {
    const timestamp = Date.now().toString(); // Current timestamp in milliseconds
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random alphanumeric string
    return `ORD-${timestamp}-${randomString}`; // Example: ORD-1689012345678-ABC123
  }

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





   exports.setorder = async (req, res, next) => {
  const { items, address, card, coupon, paymentmethod } = req.body;
  const user = req.user._id;
  if (!items || !address || !card) {
    return res.status(400).json({ msg: 'Please provide all required fields' });
  }

  // Group items and calculate total amount
  const productIds = items.map(item => item._id);
  const products = await Product.find({ _id: { $in: productIds } });

  let totalAmount = 0;
  const ordersBySeller = {};

  items.forEach(item => {
    const product = products.find(p => p._id.toString() === item._id);
    if (!product) throw new Error(`Product not found for ID: ${item._id}`);
    const sellerId = product.seller;

    if (!ordersBySeller[sellerId]) {
      ordersBySeller[sellerId] = [];
    }
    ordersBySeller[sellerId].push({
      product: item._id,
      quantity: item.quantity,
      price: product.price
    });
    totalAmount += product.price * item.quantity;
  });

  const shipping = 100;
  totalAmount += shipping;

  // Process payment
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, 
      currency: 'usd',
      payment_method_data: {
        type: 'card',
        card: {
          number: card.number,
          exp_month: card.exp_month,
          exp_year: card.exp_year,
          cvc: card.cvc
        }
      },
      confirm: true
    });

    const orders = [];
    for (const sellerId in ordersBySeller) {
      const orderItems = ordersBySeller[sellerId];
      const orderNumber = generateOrderNumber();
      const order = new Order({
        orderNumber,
        customer: user,
        seller: sellerId,
        items: orderItems,
        totalAmount,
        shippingAddress: address,
      });
      orders.push(order);
    }

    await Order.insertMany(orders);
    return res.status(200).json({
      success: true,
      message: 'Order placed successfully',
      paymentIntent
    });
  } catch (error) {
    console.error('Payment failed:', error.message);
    return res.status(500).json({ msg: 'Payment failed', error: error.message });
  }
};
