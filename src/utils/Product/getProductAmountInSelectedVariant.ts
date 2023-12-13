import { ProductsAmountOfUnitsMeasure } from "@/common/constants";

export const getProductAmountInSelectedVariant = (productAmount: string) => {
  return ProductsAmountOfUnitsMeasure[productAmount.toUpperCase() as keyof typeof ProductsAmountOfUnitsMeasure];
};
