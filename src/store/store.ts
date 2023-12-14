import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./slices/productsSlice";
import { productReducer } from "./slices/productSlice";
import { productsFiltersReducer } from "./slices/productsFilterSlice";
import { productsPaginationReducer } from "./slices/paginationSlice";
import { cartReducer } from "./slices/cartSlice";
import { notificationReducer } from "./slices/notificationSlice.ts";
import { modalWindowReducer } from "./slices/modalWindowSlice.ts";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  productsFilter: productsFiltersReducer,
  productsPagination: productsPaginationReducer,
  cart: cartReducer,
  notification: notificationReducer,
  modalWindow: modalWindowReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products", "productsPagination", "notification", "modalWindow"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
