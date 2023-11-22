import { DEFAULT_AMOUNT_PRODUCT_PER_PAGE } from "@/common/constants";

export const getCountPages = (countProducts: number) => {
  return Math.ceil(countProducts / DEFAULT_AMOUNT_PRODUCT_PER_PAGE);
};
