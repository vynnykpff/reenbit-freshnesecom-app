import { getAmountProduct } from "@/utils";
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
      (acc, product) => acc + getAmountProduct({ value: product.amount, priceVariant: product.unit }),
      GlobalInitialValues.DEFAULT,
    );
  }

  return GlobalInitialValues.DEFAULT;
};
