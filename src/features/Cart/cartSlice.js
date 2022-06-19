import useProductDetail from 'features/Product/hooks/useProductDetail';

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: { showMiniCart: false, cartItems: JSON.parse(localStorage.getItem('cart')) || [] },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    activeProduct(state, action) {
      const { index } = action.payload;
      state.cartItems[index].active ? (state.cartItems[index].active = false) : (state.cartItems[index].active = true);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const { index } = action.payload;
      state.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    changeQuantity(state, action) {
      const { index, quantity } = action.payload;
      state.cartItems[index].quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    showMiniCart(product, quantity) {},
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, changeQuantity, activeProduct, showMiniCart } = actions;
export default reducer;
