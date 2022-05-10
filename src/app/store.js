import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';
import counterSlice from '../features/Counter/counterSlice';
const rootReducer = {
  user: userReducer,
  counter: counterSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
