import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CartService } from "@/services";
import { CartState, Country, LocationCountry, StoreAsyncThunk } from "@/common/types";

const asyncThunk = createAsyncThunk("cart/getCountries", async function (country: CartState["selectedCountry"], { rejectWithValue }) {
  try {
    return await CartService.getCountries(country);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<CartState, PayloadAction<LocationCountry[]>> = (state, { payload }) => {
  const newCountries: Country[] = payload.map(country => ({
    name: country.name.common,
    countryCode: country.cca2.toLowerCase(),
  }));

  state.countries = newCountries;
};

export const getCountries: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
