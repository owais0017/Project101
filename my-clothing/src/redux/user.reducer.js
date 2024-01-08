// user.reducer.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      return action.payload
    },
}
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
