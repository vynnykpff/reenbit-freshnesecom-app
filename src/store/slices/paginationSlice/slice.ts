import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_AMOUNT_PRODUCT_PER_PAGE } from "@/common/constants";
import { PaginationState } from "@/common/types";

const initialState: PaginationState = {
  paginationPage: 0,
  paginationStartPage: 0,
  paginationEndPage: DEFAULT_AMOUNT_PRODUCT_PER_PAGE,
  productsPerPage: DEFAULT_AMOUNT_PRODUCT_PER_PAGE,
};

export const productsPaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationPage: (state, action: PayloadAction<PaginationState["paginationPage"]>) => {
      state.paginationPage = action.payload;
    },

    setProductsPerPage: (state, action: PayloadAction<PaginationState["productsPerPage"]>) => {
      state.productsPerPage = action.payload;
    },

    setStartPaginationPage: (state, action: PayloadAction<PaginationState["paginationStartPage"]>) => {
      state.paginationStartPage = action.payload;
    },

    setEndPaginationPage: (state, action: PayloadAction<PaginationState["paginationEndPage"]>) => {
      state.paginationEndPage = action.payload;
    },
  },
});

export const { actions: productsPaginationActions, reducer: productsPaginationReducer } = productsPaginationSlice;
