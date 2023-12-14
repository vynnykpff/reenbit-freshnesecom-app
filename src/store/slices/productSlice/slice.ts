import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductState } from "@/common/types";
import { ErrorMessages, InitialProduct, ProductTabsVariants } from "@/common/constants";
import productSliceThunks from "./thunks";

const initialState: ProductState = {
  product: InitialProduct,
  selectedTab: ProductTabsVariants.DESCRIPTION,
  isPending: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<ProductTabsVariants>) => {
      state.selectedTab = action.payload;
    },
  },
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
