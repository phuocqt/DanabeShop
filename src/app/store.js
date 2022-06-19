import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';
import counterSlice from '../features/Counter/counterSlice';
import cartReducer from '../features/Cart/cartSlice';

const rootReducer = {
  user: userReducer,
  counter: counterSlice,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
