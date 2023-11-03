import { ErrorMessages } from "@/common/constants";
import { ProductsState } from "@/common/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import productsSliceThunks from "./thunks";

const initialState: ProductsState = {
  products: [],
  currentProduct: "",
  productsCategoriesWithBrands: [],
  productsCategories: {},
  isPending: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentProduct: action.payload,
      };
    },
  },
  extraReducers: builder => {
    for (const thunk of productsSliceThunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        return {
          ...state,
          isPending: true,
          error: null,
        };
      });
      builder.addCase(thunk.asyncThunk.rejected, (state, { payload }) => {
        return {
          ...state,
          isPending: false,
          error: (payload as string) ?? ErrorMessages.DEFAULT,
        };
      });
      builder.addCase(thunk.asyncThunk.fulfilled, (state, action) => {
        return {
          ...state,
          ...thunk.storeHandler(state, action),
          isPending: false,
          error: null,
        };
      });
    }
  },
});

export const { actions: productsActions, reducer: productsReducer } = productsSlice;
