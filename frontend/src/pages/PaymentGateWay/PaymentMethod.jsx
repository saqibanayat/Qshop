import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createSetupIntentApi, createStripeCustormerApi, savePaymentMethodApi, setOrder } from '../../Redux/slice/authSlice';
import { toast } from 'react-toastify';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PGemNP8hIOKvXtyuu19DErEH1omlImHHthwQpWuj2vy2ospyILnv1zDGLhb7g8MzmzeQc8nsnl0wuH4S7mfLdTZ00HCI8lIjw'); // Replace with your actual Stripe publishable key

const PaymentForm = () => {
  const [coupon, setCoupon] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(createStripeCustormerApi({
    name:'saqib',
    email:'test@anypng.com'
  }))
},[])
  const dummyAddress = {
    department: "IT",
    province: "California",
    street: "123 Main St",
    district: "Central",
    number: "456",
    references: "Near Central Park"
  };

  const dummyItems = [
    { _id: '675dc247ad6485df4eeb2b11', quantity: 2 }
  ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setPaymentError('');

  //   if (!stripe || !elements) {
  //     setPaymentError("Stripe has not loaded yet.");
  //     setIsLoading(false);
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   try {
     
  //     dispatch(setOrder({
  //       items: dummyItems,
  //       address: dummyAddress,
  //       coupon,
  //       paymentmethod: 'card',
  //     }))
  //       .then(async(res) => {
  //  const paymentIntentId = res?.payload?.paymentIntent?.id;
  //     if (!paymentIntentId) {
  //       setPaymentError('Failed to create payment intent.');
  //       setIsLoading(false);
  //       return;
  //     }
  //        const result = await stripe.confirmCardPayment(res.payload.paymentIntent.client_secret, {
  //       payment_method: {
  //         card: cardElement,
  //       },
  //     });

  //     if (result.error) {
  //       setPaymentError(result.error.message);
  //       setIsLoading(false);
  //       return;
  //     } else if (result.paymentIntent.status === 'succeeded') {
       
  //       console.log('enter here');
        
  //        dispatch(setOrder({
  //         items: dummyItems,
  //         address: dummyAddress,
  //         coupon,
  //         paymentmethod: 'card',
  //         paymentIntentId: result.paymentIntent.id,
  //         confirmationStep: true, // New flag for backend
  //       }));

  //       toast.success('Payment succeeded and order placed!');
  //     }
  //       })
   

   

   
  //   } catch (error) {
  //     console.error('Payment failed:', error);
  //     setPaymentError('Payment failed. Please try again.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPaymentError("");
  
    if (!stripe || !elements) {
      setPaymentError("Stripe has not loaded yet.");
      setIsLoading(false);
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    try {
      // Step 1: Create SetupIntent
     
      dispatch(createSetupIntentApi())
      .then(async(res)=>{
        console.log(res?.payload,'create setup intent');
        
const { setupIntent } = res?.payload;
   if (!setupIntent) {
        setPaymentError("Failed to create setup intent.");
        setIsLoading(false);
        return;
      }

      // Step 2: Confirm card setup
      const result = await stripe.confirmCardSetup(setupIntent.client_secret, {
        payment_method: {
          card: cardElement,
        },
      });

  if (result.error) {
        setPaymentError(result.error.message);
        setIsLoading(false);
        return;
      }
    // Step 3: Save the PaymentMethod ID for later use
      const paymentMethodId = result.setupIntent.payment_method;
  
      console.log("Payment Method Saved:", paymentMethodId);
      toast.success("Card saved successfully!");

            // Optionally, save paymentMethodId to your backend associated with the user
    
      dispatch(savePaymentMethodApi({ paymentMethodId }))
  .then((res)=>{
console.log(res?.payload, 'saved payment');

  })
      })
      
  
   
  
  
    
  
  

  
    } catch (error) {
      console.error("Error saving card:", error);
      setPaymentError("Failed to save card. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="w-1/2 space-y-4">
      <CardElement className="p-4 bg-gray-300 rounded-lg" />
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="block w-full bg-gray-300 rounded-lg p-2.5"
        placeholder="Use Coupon (optional)"
      />
      <button
        type="submit"
        className="h-[58px] w-full rounded-lg flex items-center justify-center bg-orange-400 text-center text-xl text-white"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Add Card'}
      </button>
      {paymentError && <p className="text-red-500 text-sm mt-2">{paymentError}</p>}
    </form>
  );
};

const PaymentMethod = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden">
      <h1 className="text-3xl text-blue-400 py-6">Add a Payment Method</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default PaymentMethod;
