// features/qshopSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentState: {} 
};

const qshopSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.paymentState = action.payload;
    },
    resetStep: (state) => {
      state.paymentState = {}; 
    },
  },
});

export const { setStep, resetStep } = qshopSlice.actions;
export default qshopSlice.reducer;
