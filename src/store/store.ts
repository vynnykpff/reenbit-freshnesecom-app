import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
