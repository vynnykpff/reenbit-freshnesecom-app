import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ProductsService } from "@/services";
import { getProductsCategories, getProductsCategoriesWithBrands } from "@/utils";
import { Products, ProductsState, StoreAsyncThunk } from "@/common/types";

const asyncThunk = createAsyncThunk("products/getProducts", async function (_, { rejectWithValue }) {
  try {
    return await ProductsService.getProducts();
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<ProductsState, PayloadAction<Products[]>> = (state, action) => {
  state.products = action.payload;
  state.productsCategoriesWithBrands = getProductsCategoriesWithBrands(action.payload);
  state.productsCategories = getProductsCategories(action.payload);
};

export const getProducts: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
