import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {  axiosPrivate, instance } from '../../axios/axios'; 
import axios from 'axios';

export const getSellerProfileApi = createAsyncThunk(
  'authentication/getSellerProfileApi',
  async (_, thunkAPI) => {
    try {
      const res = await axiosPrivate.get(`api/user/getsellerprofile`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const setSellerProfileApi = createAsyncThunk(
  'authentication/setSellerProfileApi',
  async (data, thunkAPI) => {
    try {
      const res = await axiosPrivate.post(`api/user/setsellerprofile`,data, {
        headers: { 
          'Content-Type': 'application/form-data' 
         }});
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//add the product by the seller

export const AddProductApi = createAsyncThunk( 'authentication/AddProductApi',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`api/product/setproduct`,data, {
        headers: { 
          'Content-Type': 'application/form-data' 
         }});
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//get the list of products of seller

export const getProductsApi = createAsyncThunk(
  'authentication/getProductsApi',
  async ({seller,category}, thunkAPI) => {
    try {
      const res = await axiosPrivate.get(`api/product/getproduct`,{
        params:{seller,category}
      });
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getCategoriesApi = createAsyncThunk(
  'authentication/getCategoriesApi',
  async (_, thunkAPI) => {
    try {
      const res = await axiosPrivate.get(`api/category/getcategory`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  sellerProfileData:{},
  product:{},
  getSellerProductsList:{},
  listOfCategory:[],
  message: '',
  error: null,
};

const sellerSlice = createSlice({
  name: 'authentication',
  initialState,
//   reducers: {
//     updateAccessToken: (state, action) => {
//       state.userData = action.payload;
//     },
//   },
  extraReducers: (builder) => {
    builder





      .addCase(getProductsApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsApi.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.sellerProfileData = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      
      .addCase(getProductsApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })


      .addCase(getCategoriesApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listOfCategory = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      
      .addCase(getCategoriesApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
  

      .addCase(getSellerProfileApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSellerProfileApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sellerProfileData = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(getSellerProfileApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
  },
});

export const { updateAccessToken } = sellerSlice.actions;
export default sellerSlice.reducer;
