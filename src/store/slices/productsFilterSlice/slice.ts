import { ProductsFilterState } from "@/common/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductsFilterState = {
  searchValue: "",
  productCategory: "",
  productBrand: "",
  isPending: false,
  error: null,
};

export const productsFilterSlice = createSlice({
  name: "products_filter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchValue: action.payload,
      };
    },
    setCategory: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        productCategory: action.payload,
      };
    },
    setBrand: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        productBrand: action.payload,
      };
    },
  },
});

export const { actions: productsFilterActions, reducer: productsFilterReducer } = productsFilterSlice;
