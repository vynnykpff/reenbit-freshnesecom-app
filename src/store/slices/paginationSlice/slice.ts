import { DEFAULT_AMOUNT_PRODUCT_PER_PAGE, PaginationVariables } from "@/common/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaginationState } from "@/common/types";

const initialState: PaginationState = {
  paginationPage: PaginationVariables.INITIAL_PAGE,
  productsPerPage: DEFAULT_AMOUNT_PRODUCT_PER_PAGE,
};

export const productsPaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationPage: (state, action: PayloadAction<PaginationState["paginationPage"]>) => {
      state.paginationPage = action.payload;
    },
  },
});

export const { actions: productsPaginationActions, reducer: productsPaginationReducer } = productsPaginationSlice;
