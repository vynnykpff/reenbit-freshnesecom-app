import { getCurrentProductsAmountInCart } from "@/utils";
import { CartPayload } from "@/common/types";

type Params = {
  productsInCart: CartPayload[];
  id: string;
  amount: number;
};

export const getMaxAvailableAmount = ({ amount, id, productsInCart }: Params) => {
  const currentAmountInCart = getCurrentProductsAmountInCart({ productsInCart, id });
  return amount - currentAmountInCart;
};
