import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { getCurrentProductPrice } from "@/utils";
import { CartPayload, ProductPrice, ProductValue } from "@/common/types";

type CartSimilarProductsParams = {
  id: string;
  priceVariant: string;
  isCart: boolean;
} & Omit<ProductPrice, "currency">;

type Params = {
  setCartProductPayload: ActionCreatorWithPayload<{ products: CartPayload; isCart: boolean }>;
  cartValue: number;
} & ProductValue &
  CartSimilarProductsParams;

const getSimilarCartProductsParams = ({ id, priceVariant, discount, original, isCart }: CartSimilarProductsParams) => {
  return {
    products: {
      price: getCurrentProductPrice(original, discount),
      id,
      unit: priceVariant,
    },
    isCart,
  };
};

export const setCartProductValue = ({ cartValue, inputValue, setInputValue, setCartProductPayload, ...props }: Params) => {
  const similarProductsParams = getSimilarCartProductsParams({ ...props });

  setCartProductPayload({
    products: {
      ...similarProductsParams.products,
      amount: cartValue,
    },
    isCart: similarProductsParams.isCart,
  });

  setInputValue(inputValue);
};
