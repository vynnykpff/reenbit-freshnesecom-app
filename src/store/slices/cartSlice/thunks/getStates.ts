import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CartService } from "@/services";
import { CartState, State, StoreAsyncThunk } from "@/common/types";

const asyncThunk = createAsyncThunk("cart/getStates", async function (country: CartState["selectedCountry"], { rejectWithValue }) {
  try {
    return await CartService.getStates(country);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<CartState, PayloadAction<State[]>> = (state, { payload }) => {
  const newStates: State[] = payload.map(state => ({ name: state.name }));
  state.countryStates = newStates;
};

export const getStates: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
