import { GlobalInitialValues } from "@/common/constants";
import { CartPayload } from "@/common/types";

type Params = {
  cartProducts: CartPayload[];
  id: string;
  key: string;
};

export const checkOnSingleProductType = ({ cartProducts, key, id }: Params) => {
  const filteredProducts = cartProducts.filter(product => product.id === id && product.unit === key);
  return filteredProducts.length === +GlobalInitialValues.MIN_PRODUCT_AMOUNT;
};
