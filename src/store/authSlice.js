// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false, // Default value
  },
  reducers: {
    // Add your reducers here
  },
});

export const {
  /* actions */
} = authSlice.actions;
export default authSlice.reducer;
