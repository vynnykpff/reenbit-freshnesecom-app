import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState, FieldData, FormFields } from "@/common/types";
import { CartInitialFields, ErrorMessages } from "@/common/constants";
import cartSliceThunks from "./thunks";

const initialState: CartState = {
  fields: CartInitialFields,
  countries: [{ name: "", countryCode: "" }],
  states: [{ name: "" }],
  cities: [],
  isPending: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<FormFields["country"]>) => {
      state.fields.country = action.payload;
    },

    setState: (state, action: PayloadAction<FormFields["state"]>) => {
      state.fields.state = action.payload;
    },

    setCity: (state, action: PayloadAction<FormFields["city"]>) => {
      state.fields.city = action.payload;
    },

    setField: (state, { payload: { key, value } }: PayloadAction<FieldData>) => {
      state.fields[key] = value;
    },

    resetCountries: state => {
      state.countries = [{ name: "", countryCode: "" }];
    },

    resetStates: state => {
      state.states = [{ name: "" }];
    },

    resetFields: state => {
      state.fields = CartInitialFields;
    },
  },

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
