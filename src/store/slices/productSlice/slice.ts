import { createSlice } from "@reduxjs/toolkit";
import productSliceThunks from "./thunks";
import { Product, ProductState } from "@/common/types";
import { ErrorMessages } from "@/common/constants";

const initialState: ProductState = {
  product: {} as Product,
  isPending: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: builder => {
    for (const thunk of productSliceThunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        state.isPending = true;
        state.error = null;
      });
      builder.addCase(thunk.asyncThunk.rejected, (state, { payload }) => {
        state.isPending = false;
        state.error = (payload as string) ?? ErrorMessages.DEFAULT;
      });
      builder.addCase(thunk.asyncThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = null;
        thunk.storeHandler(state, action);
      });
    }
  },
});
export const { actions: productActions, reducer: productReducer } = productsSlice;
