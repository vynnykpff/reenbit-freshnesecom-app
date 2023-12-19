import { getProductAmountInSelectedVariant } from "@/utils";

type Params = {
  value: number;
  priceVariant: string;
};

export const getAmountProduct = ({ value, priceVariant }: Params) => {
  return value * getProductAmountInSelectedVariant(priceVariant);
};
