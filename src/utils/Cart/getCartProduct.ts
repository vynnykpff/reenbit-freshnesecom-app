import { getAmountProduct } from "@/utils";
import { CartPayload } from "@/common/types";
import { CartInitialProduct, GlobalInitialValues } from "@/common/constants";

type CartProductParams = {
  id: string;
  selectedUnit: string;
  cartProducts: CartPayload[];
};

type CartProductAmountParams = {
  id: string;
  priceVariant: string;
  cartProducts: CartPayload[];
};

export const getCartProduct = ({ cartProducts, selectedUnit, id }: CartProductParams): CartPayload =>
  cartProducts?.find(product => product.id === id && product.unit === selectedUnit) ?? CartInitialProduct;

export const getCartProductAmount = ({ id, cartProducts, priceVariant }: CartProductAmountParams) => {
  return cartProducts.reduce((acc, product) => {
    const { unit, amount } = product;
    if (product.id === id && unit !== priceVariant) {
      acc += getAmountProduct({ value: amount, priceVariant: unit });
    }

    return acc;
  }, GlobalInitialValues.DEFAULT);
};
