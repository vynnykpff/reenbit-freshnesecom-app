import { productsActions } from "./productsSlice";
import { productsFilterActions } from "./productsFilterSlice";
import { getProducts } from "./productsSlice/thunks";

export const ActionCreators = {
  getProducts: getProducts.asyncThunk,
  ...productsActions,
  ...productsFilterActions,
};
