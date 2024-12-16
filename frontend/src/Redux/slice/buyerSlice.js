import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {  axiosPrivate, instance } from '../../axios/axios'; 
import axios from 'axios';

export const addToCartApi = createAsyncThunk(
  'authentication/addToCartApi',
  async (data, thunkAPI) => {
    try {
      const res = await axiosPrivate.post(`api/order/addcartitem`,data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getCartListApi = createAsyncThunk(
  'authentication/addToCartApi',
  async (_, thunkAPI) => {
    try {
      const res = await axiosPrivate.get(`api/order/getcart`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const removeCartItemApi = createAsyncThunk(
  'authentication/removeCartItemApi',
  async (data, thunkAPI) => {
    try {
      const res = await axiosPrivate.post(`api/order/removecartitem`,data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const initialState = {
  isLoading: false,
 ListOfCartItems:{},
  message: '',
  error: null,
};

const buyerSlice = createSlice({
  name: 'authentication',
  initialState,
//   reducers: {
//     updateAccessToken: (state, action) => {
//       state.userData = action.payload;
//     },
//   },
  extraReducers: (builder) => {
    builder





      .addCase(getCartListApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartListApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ListOfCartItems = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      
      .addCase(getCartListApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })


  },
});

export const { updateAccessToken } = buyerSlice.actions;
export default buyerSlice.reducer;
