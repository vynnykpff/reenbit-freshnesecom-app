import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "@/services";
import { CartState, City, CityData, StoreAsyncThunk } from "@/common/types";
import { CartErrorMessages } from "@/common/constants";

const asyncThunk = createAsyncThunk("cart/getCities", async function ({ country, state }: City, { rejectWithValue }) {
  try {
    return await CartService.getCities({ country, state });
  } catch (error) {
    return rejectWithValue(CartErrorMessages.INCORRECT_CITY);
  }
});

const storeHandler: CaseReducer<CartState, PayloadAction<CityData["data"]>> = (state, { payload }) => {
  state.cities = payload;
};

export const getCities: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
