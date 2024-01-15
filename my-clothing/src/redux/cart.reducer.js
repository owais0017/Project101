import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    toggleCart: false,
    cartItem: [], // Initialize cartItem as an empty array
  },
  reducers: {
    setToggleCart: (state) => {
      return {
        ...state,
        toggleCart: !state.toggleCart,
      };
    },
    setCartItem: (state, action) => {
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    },
    clearCartItem: (state, action) => {
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (cartitem) => cartitem.id !== action.payload.id
        ),
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItem: removeItemFromCart(state.cartItem, action.payload),
      };
    },
  },
});

export const {
  setToggleCart,
  setCartItem,
  clearCartItem,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
