import { CaseReducer, createSlice } from "@reduxjs/toolkit";
import { CartState } from "@/common/types";
import { ErrorMessages } from "@/common/constants";
import cartSliceThunks from "./thunks";

const initialState: CartState = {
  selectedCountry: "",
  selectedCity: "",
  selectedCountryState: "",
  countries: [{ name: "", countryCode: "" }],
  countryStates: [{ name: "" }],
  countryCities: [""],
  isPending: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: builder => {
    for (const thunk of cartSliceThunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        state.isPending = true;
        state.error = null;
      });
      builder.addCase(thunk.asyncThunk.rejected, (state, { payload }) => {
        state.isPending = false;
        state.error = (payload as string) ?? ErrorMessages.DEFAULT;
      });
      builder.addCase(thunk.asyncThunk.fulfilled, (state, action) => {
        const storeHandler = thunk.storeHandler as CaseReducer;
        state.isPending = false;
        state.error = null;
        storeHandler(state, action);
      });
    }
  },
});
export const { actions: cartActions, reducer: cartReducer } = cartSlice;
