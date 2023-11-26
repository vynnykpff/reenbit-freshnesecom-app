import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ProductService } from "@/services";
import { ProductState, Products, StoreAsyncThunk } from "@/common/types";

const asyncThunk = createAsyncThunk("product/getProduct", async function (arg: string, { rejectWithValue }) {
  try {
    return await ProductService.getProduct(arg);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<ProductState, PayloadAction<Products>> = (state, action) => {
  state.product = action.payload;
};

export const getProduct: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
