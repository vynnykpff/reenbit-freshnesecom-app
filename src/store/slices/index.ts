import { getProducts } from "./productsSlice/thunks";
import { productsActions } from "./productsSlice";
import { productActions } from "./productSlice";
import { productsFiltersActions } from "./productsFilterSlice";
import { productsPaginationActions } from "./paginationSlice";

export const ActionCreators = {
  getProducts: getProducts.asyncThunk,
  ...productsActions,
  ...productActions,
  ...productsFiltersActions,
  ...productsPaginationActions,
};
