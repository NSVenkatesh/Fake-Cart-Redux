import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    cart: cartReducer,
  },
});

export default store;
