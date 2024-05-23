import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import ProductReducer from "./slice/ProductSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: ProductReducer,
  },
});
