import { createSelector } from '@reduxjs/toolkit';

const selectPrice = (state) => state.cart.cartItems;

export const cartItemsCount = createSelector(
  selectPrice,

  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const totalPriceAll = createSelector(
  selectPrice,

  (cartItems) =>
    cartItems.reduce((total, item) => (item.active ? total + item.product.salePrice * item.quantity : total), 0)
);
