import { getProduct } from "./productSlice/thunks";
import { getProducts } from "./productsSlice/thunks";
import { getCities, getCountries, getStates } from "./cartSlice/thunks";
import { productsActions } from "./productsSlice";
import { productActions } from "./productSlice";
import { productsFiltersActions } from "./productsFilterSlice";
import { productsPaginationActions } from "./paginationSlice";
import { cartActions } from "./cartSlice";
import { notificationActions } from "./notificationSlice.ts";
import { modalWindowActions } from "./modalWindowSlice.ts";

export const ActionCreators = {
  getProducts: getProducts.asyncThunk,
  getProduct: getProduct.asyncThunk,
  getCountries: getCountries.asyncThunk,
  getStates: getStates.asyncThunk,
  getCities: getCities.asyncThunk,
  ...productsActions,
  ...productActions,
  ...productsFiltersActions,
  ...productsPaginationActions,
  ...cartActions,
  ...notificationActions,
  ...modalWindowActions,
};
