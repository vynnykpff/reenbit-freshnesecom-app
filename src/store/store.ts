import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./slices/productsSlice";
import { productsFilterReducer } from "./slices/productsFilterSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  productsFilter: productsFilterReducer,
});

const persistConfig = {
  key: "key",
  storage,
  blacklist: ["products"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
