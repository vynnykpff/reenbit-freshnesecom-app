import { ErrorMessages } from "@/common/constants";
import { ProductsState } from "@/common/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import productsSliceThunks from "./thunks";
const initialState: ProductsState = {
  products: [],
  currentProduct: "",
  productsCategoriesWithBrands: [],
  productsCategories: {},
  searchValue: "",
  isPending: false,
  error: null,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<string>) => {
      state.currentProduct = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: builder => {
    for (const thunk of productsSliceThunks) {
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
export const { actions: productsActions, reducer: productsReducer } = productsSlice;
