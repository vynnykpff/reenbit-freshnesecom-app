import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "@/services";
import { CartState, LocationCountry, StoreAsyncThunk } from "@/common/types";
import { ErrorMessages } from "@/common/constants";

const asyncThunk = createAsyncThunk("cart/getCountries", async function (country: string, { rejectWithValue }) {
  try {
    return await CartService.getCountries(country);
  } catch (error) {
    return rejectWithValue(ErrorMessages.INCORRECT_COUNTRY);
  }
});

const storeHandler: CaseReducer<CartState, PayloadAction<LocationCountry[]>> = (state, { payload }) => {
  state.countries = payload.map(country => ({
    name: country.name.common,
    countryCode: country.cca2.toLowerCase(),
  }));
};

export const getCountries: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
