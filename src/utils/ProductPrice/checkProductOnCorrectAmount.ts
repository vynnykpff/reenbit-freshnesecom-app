import { ProductPrice, ProductPriceBaseParams } from "@/common/types";
import { ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  checkValue: number;
  productAmount: number;
  setLocalProductPrice: ProductPriceBaseParams["setLocalProductPrice"];
} & Omit<ProductPrice, "currency">;

export const checkProductOnCorrectAmount = ({ checkValue, productAmount, setLocalProductPrice, original, discount }: Params) => {
  if (checkValue >= +ProductsAmountOfUnitsMeasure.PCS && checkValue <= productAmount) {
    setLocalProductPrice({ original: original * checkValue, discount: discount * checkValue });
    return true;
  }

  return false;
};
