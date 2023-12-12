import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "@/services";
import { CartState, State, StoreAsyncThunk } from "@/common/types";
import { CartErrorMessages } from "@/common/constants";

const asyncThunk = createAsyncThunk("cart/getStates", async function (country: string, { rejectWithValue }) {
  try {
    return await CartService.getStates(country);
  } catch (error) {
    return rejectWithValue(CartErrorMessages.INCORRECT_STATE);
  }
});

const storeHandler: CaseReducer<CartState, PayloadAction<State[]>> = (state, { payload }) => {
  state.states = payload.map(state => ({ name: state.name }));
};

export const getStates: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
