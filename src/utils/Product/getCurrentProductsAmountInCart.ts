import { getProductAmountInSelectedVariant } from "@/utils";
import { CartPayload } from "@/common/types";
import { GlobalInitialValues } from "@/common/constants";

type Params = {
  productsInCart: CartPayload[];
  id: string;
};

export const getCurrentProductsAmountInCart = ({ productsInCart, id }: Params) => {
  const productInCart = productsInCart.filter(product => product.id === id);

  if (productInCart.length) {
    return productInCart.reduce(
      (acc, product) => acc + product.amount * getProductAmountInSelectedVariant(product.unit),
      GlobalInitialValues.DEFAULT,
    );
  }

  return GlobalInitialValues.DEFAULT;
};
