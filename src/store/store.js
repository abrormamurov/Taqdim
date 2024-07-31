import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Adjust this path according to your project structure

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});

export default store;
