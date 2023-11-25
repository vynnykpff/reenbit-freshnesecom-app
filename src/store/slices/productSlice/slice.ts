import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductState, Products } from "@/common/types";

const initialState: ProductState = {
  product: {} as Products,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Products>) => {
      state.product = action.payload;
    },

    resetProduct: state => {
      state.product = {} as Products;
    },
  },
});
export const { actions: productActions, reducer: productReducer } = productsSlice;
