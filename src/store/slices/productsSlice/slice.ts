import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products, ProductsState } from "@/common/types";
import { ErrorMessages } from "@/common/constants";
import productsSliceThunks from "./thunks";

const initialState: ProductsState = {
  products: [],
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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setProducts: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
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
