import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CartService } from "@/services";
import { CartState, City, CityData, StoreAsyncThunk } from "@/common/types";

const asyncThunk = createAsyncThunk("cart/getCities", async function ({ country, state }: City, { rejectWithValue }) {
  try {
    return await CartService.getCities({ country, state });
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<CartState, PayloadAction<CityData["data"]>> = (state, { payload }) => {
  state.countryCities = payload;
};

export const getCities: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
