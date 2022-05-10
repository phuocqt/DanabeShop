import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call Api
  const response = await userApi.register(payload);
  const userdata = response.data;
  console.log(userdata);
  //save data to local storage
  localStorage.setItem('access_token', userdata.jwt);
  localStorage.setItem('user', JSON.stringify(userdata.user));

  return userdata.user;
});
export const login = createAsyncThunk('user/login', async (payload) => {
  //call Api
  const response = await userApi.login(payload);
  const userdata = response.data;
  console.log(userdata);
  //save data to local storage
  localStorage.setItem('access_token', userdata.jwt);
  localStorage.setItem('user', JSON.stringify(userdata.user));

  return userdata.user;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },

  reducers: {
    logout(state) {
      state.current = {};
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { reducer, actions } = userSlice;

export const { logout } = actions;
export default reducer;
