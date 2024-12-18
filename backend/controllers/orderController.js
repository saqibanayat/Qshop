const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
  const stripe = require('stripe')("sk_test_51PGemNP8hIOKvXtyGWFaf6dQAx8JbjZJKzZjKCW1BNyRVj3MJ80F47qOZFtmpgoqmU84tBNkEttSpOdy9MHxuBDh007nWw4LOh")

  const mongoose = require("mongoose");

  function generateOrderNumber() {
    const timestamp = Date.now().toString(); // Current timestamp in milliseconds
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random alphanumeric string
    return `ORD-${timestamp}-${randomString}`; // Example: ORD-1689012345678-ABC123
  }

exports.getorderbyseller= async (req, res, next)=>
    {
      try {
        const user= req.Seller?._id;
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
        const user = req.user._id;
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
      try {
        const { items, address, coupon, paymentMethodId,customerId, paymentIntentId, confirmationStep } = req.body;
        const user = req.user._id;
    
        // Validate input
        if (!items || !address || (confirmationStep && !paymentIntentId)) {
          return res.status(400).json({ msg: "Please provide all required fields" });
        }
    
        // Validate and convert product IDs
        const productIds = items.map((item) => item._id);
        const invalidIds = productIds.filter((id) => !mongoose.Types.ObjectId.isValid(id));
        if (invalidIds.length > 0) {
          return res.status(400).json({
            success: false,
            message: `Invalid product IDs: ${invalidIds.join(", ")}`,
          });
        }
    
        // Fetch products from the database
        const products = await Product.find({ _id: { $in: productIds } });
    
        let totalAmount = 0;
        const ordersBySeller = {};
    
        // Calculate total amount and group orders by seller
        items.forEach((item) => {
          const product = products.find((p) => p._id.toString() === item._id);
          if (!product) throw new Error(`Product not found for ID: ${item._id}`);
          const sellerId = product.seller;
    
          if (!ordersBySeller[sellerId]) {
            ordersBySeller[sellerId] = [];
          }
          ordersBySeller[sellerId].push({
            product: item._id,
            quantity: item.quantity,
            price: product.price,
          });
          totalAmount += product.price * item.quantity;
        });
    
        // Step 1: Create payment intent if not in confirmation step
        if (!confirmationStep) {

          const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);
          if (!paymentMethod) {
            return res.status(400).json({
              success: false,
              message: "Invalid PaymentMethod ID",
            });
          }

          const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount * 100, // Stripe accepts amount in cents
            currency: "usd",
            customer:customerId,
            payment_method: paymentMethodId, // Explicitly attach the payment method
            confirmation_method: "manual",
            confirm: true,
            return_url: "https://localhost:3001/payment-complete",
          });
    
          return res.status(200).json({
            success: true,
            message: "Payment intent created and confirmed",
            paymentIntent,
          });
        }
    
        // Step 2: Confirm payment and create orders (if confirmation step)
        if (confirmationStep) {
          try {
            // Verify payment status with Stripe
            const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
            if (paymentIntent.status !== "succeeded") {
              return res.status(400).json({ msg: "Payment not successful" });
            }
          } catch (error) {
            console.error("Payment verification failed:", error.message);
            return res.status(500).json({ msg: "Payment verification failed", error: error.message });
          }
    
          // Create orders
          const orders = [];
          for (const sellerId in ordersBySeller) {
            const orderItems = ordersBySeller[sellerId];
            const orderNumber = generateOrderNumber(); // Assuming this is defined elsewhere
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
            message: "Order placed successfully",
          });
        }
      } catch (error) {
        console.error("Error in setorder:", error.message);
        return res.status(500).json({ msg: "Server Error", error: error.message });
      }
    };
    
    
    

exports.createStripeCustomer = async (req, res) => {
  try {
    const { name, email } = req.body; 
    const userId = req.user._id; 

    // Step 1: Check if the user already has a Stripe customer ID
    const existingUser = await User.findById(userId);
    if (existingUser.stripeCustomerId) {
      return res.status(200).json({
        success: true,
        message: 'Stripe customer already exists.',
        stripeCustomerId: existingUser.stripeCustomerId,
      });
    }

    const customer = await stripe.customers.create({
      name,
      email,
    });

    existingUser.stripeCustomerId = customer.id;
    await existingUser.save();

    // Step 4: Return a success response
    return res.status(200).json({
      success: true,
      message: 'Stripe customer created successfully.',
      stripeCustomerId: customer.id,
    });
  } catch (error) {
    console.error('Error creating Stripe customer:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to create Stripe customer.',
      error: error.message,
    });
  }
};

  

exports.createSetupIntent = async (req, res) => {
  try {
 
    const customerId = req.user.stripeCustomerId;
    const setupIntent = await stripe.setupIntents.create({
      customer: customerId, 
      payment_method_types: ['card'],
    });

    res.status(200).json({ success: true, setupIntent });
  } catch (error) {
    console.error("Error creating SetupIntent:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.savePaymentMethod = async (req, res) => {
  try {
    const { paymentMethodId } = req.body;
    const userId = req.user._id;

    // Save the paymentMethodId in your database
    await User.findByIdAndUpdate(userId, { stripePaymentMethod: paymentMethodId });

    res.status(200).json({ success: true, message: "Payment method saved successfully" });
  } catch (error) {
    console.error("Error saving payment method:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.executePayment = async (req, res) => {
  try {
    const { amount, paymentMethodId } = req.body;

    // Step 1: Create the PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency: "usd",
      confirm:true , // Don't confirm it yet
      return_url: "http://localhost:3001/PaymentGateWay/confirmation", // Your custom return URL
    });

    // Step 2: Attach the payment method to the PaymentIntent
    await stripe.paymentIntents.update(paymentIntent.id, {
      payment_method: paymentMethodId,
    });

    // Step 3: Confirm the PaymentIntent
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent.id);

    res.status(200).json({ success: true, paymentIntent: confirmedPaymentIntent });
  } catch (error) {
    console.error("Payment execution error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};




exports.getSavedPaymentMethods = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user is authenticated
    const user = await User.findById(userId);

    if (!user || !user.stripeCustomerId) {
      return res.status(404).json({
        success: false,
        message: 'Stripe customer not found for this user.',
      });
    }

    // Retrieve all saved card payment methods for this customer
    const paymentMethods = await stripe.paymentMethods.list({
      customer: user.stripeCustomerId,
      type: 'card',
    });

    return res.status(200).json({
      success: true,
      paymentMethods: paymentMethods.data.map((method) => ({
        id: method.id,
        brand: method.card.brand,
        last4: method.card.last4,
        exp_month: method.card.exp_month,
        exp_year: method.card.exp_year,
      })),
    });
  } catch (error) {
    console.error('Error retrieving payment methods:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve payment methods.',
      error: error.message,
    });
  }
};
