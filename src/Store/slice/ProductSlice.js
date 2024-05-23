import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productName: "washing machine",
    hasFreeShipping: false,
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { setCount } = counterSlice.actions;

export default productSlice.reducer;
