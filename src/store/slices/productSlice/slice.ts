import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, ProductState } from "@/common/types";

const initialState: ProductState = {
  product: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },

    resetProduct: state => {
      state.product = {};
    },
  },
});
export const { actions: productActions, reducer: productReducer } = productsSlice;
