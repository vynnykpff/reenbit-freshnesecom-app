import { ProductPrice } from "@/common/types";

const PERCENTAGE_MULTIPLIER = 100;
const MINIMUM_DISCOUNT_VALUE = 0;

export const getProductDiscount = ({ original, discount }: Omit<ProductPrice, "currency">) => {
  if (!discount) {
    return MINIMUM_DISCOUNT_VALUE;
  }

  return Math.round(((original - discount) / original) * PERCENTAGE_MULTIPLIER);
};
