import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate, instance } from '../../axios/axios'; 
import axios from 'axios';

export const RegisteruserApi = createAsyncThunk(
  'authentication/RegisteruserApi',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`api/user/register`, data);
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
      const res = await instance.post(`api/user/registerSeller`, data);
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
      const res = await instance.post(`api/user/login`, data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const addFavoriteApi = createAsyncThunk(
  'authentication/addFavoriteApi',
  async (productId, thunkAPI) => {
    try {
      const res = await instance.post(`api/favorite/addfavorite`, {productId});
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getFavoriteApi = createAsyncThunk(
  'authentication/getFavoriteApi',
  async (data, thunkAPI) => {
    try {
      const res = await axiosPrivate.get(`api/favorite/getfavorite`);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.alertMessage || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteFavoriteApi = createAsyncThunk(
  'authentication/deleteFavoriteApi',
  async (productId, thunkAPI) => {
    try {
      const res = await instance.delete(`api/favorite/removefavorite`, {
        params:{productId}
      });
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
      const res = await instance.get(`api/user/logout`);
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
  listOfFavoriteProducts:{},
  
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
   
      .addCase(getFavoriteApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listOfFavoriteProducts = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(getFavoriteApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
   
  },
});

export const { updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
