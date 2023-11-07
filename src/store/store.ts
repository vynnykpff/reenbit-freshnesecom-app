import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { productsFilterReducer } from "./slices/productsFilterSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  productsFilter: productsFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
