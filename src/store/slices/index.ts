import { productsActions } from "./productsSlice";
import { getProducts } from "./productsSlice/thunks";

export const ActionCreators = {
  getProducts: getProducts.asyncThunk,
  ...productsActions,
};
