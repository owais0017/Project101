import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: false,
  reducers: {
    setToggleCart: (state) => {
      return !state;
    },
  },
});

export const { setToggleCart } = cartSlice.actions;
export default cartSlice.reducer;