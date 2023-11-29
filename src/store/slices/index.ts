import { getProduct } from "./productSlice/thunks";
import { getProducts } from "./productsSlice/thunks";
import { productsActions } from "./productsSlice";
import { productActions } from "./productSlice";
import { productsFiltersActions } from "./productsFilterSlice";
import { productsPaginationActions } from "./paginationSlice";
import { notificationActions } from "./notificationSlice.ts";

export const ActionCreators = {
  getProducts: getProducts.asyncThunk,
  getProduct: getProduct.asyncThunk,
  ...productsActions,
  ...productActions,
  ...productsFiltersActions,
  ...productsPaginationActions,
  ...notificationActions,
};
