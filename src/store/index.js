// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Adjust if the file name or path is different

const store = configureStore({
  reducer: rootReducer,
});

export default store;
