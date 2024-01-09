import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";

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
        cartItem: addItemToCart(state.cartItem , action.payload),
      };
    },
  },
});

export const { setToggleCart, setCartItem } = cartSlice.actions;
export default cartSlice.reducer;
