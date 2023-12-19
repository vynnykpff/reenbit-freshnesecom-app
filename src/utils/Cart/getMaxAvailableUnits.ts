import { getProductAmountInSelectedVariant } from "@/utils";

type Params = {
  maxAvailableAmount: number;
  selectedVariant: string;
};

export const getMaxAvailableUnits = ({ maxAvailableAmount, selectedVariant }: Params) => {
  return Math.floor(maxAvailableAmount / getProductAmountInSelectedVariant(selectedVariant));
};
