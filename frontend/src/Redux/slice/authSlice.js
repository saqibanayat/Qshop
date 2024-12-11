import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../axios/axios'; 
import axios from 'axios';

export const RegisteruserApi = createAsyncThunk(
  'authentication/RegisteruserApi',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`api/users/register`, data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const RegisterSellerApi = createAsyncThunk(
  'authentication/RegisterSellerApi',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`api/users/registerSeller`, data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const loginApi = createAsyncThunk(
  'authentication/loginApi',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`api/users/login`, data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logoutApi = createAsyncThunk(
  'authentication/logoutApi',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get(`api/users/logout`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getSellerProfileApi = createAsyncThunk(
  'authentication/getSellerProfileApi',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get(`api/users/getsellerprofile`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const setSellerProfileApi = createAsyncThunk(
  'authentication/setSellerProfileApi',
  async (_, thunkAPI) => {
    try {
      const res = await instance.post(`api/users/setsellerprofile`);
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
      const res = await instance.post(`api/users/setproduct`,data, {
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
  'authentication/AddProdgetProductsApiuctApi',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get(`api/users/getproduct`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  userData: {},
  sellerProfileData:{},
  getSellerProductsList:{},
  message: '',
  error: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder


      .addCase(loginApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })

      .addCase(getSellerProfileApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSellerProfileApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getSellerProfileApi = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(getSellerProfileApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(getProductsApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getSellerProductsList = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(getProductsApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(logoutApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = {};
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(logoutApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
  },
});

export const { updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
