import { ProductPrice, ProductPriceBaseParams } from "@/common/types";
import { ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  checkValue: number;
  amount: number;
  setProductPrice: ProductPriceBaseParams["setProductPrice"];
} & Omit<ProductPrice, "currency">;

export const checkProductOnCorrectAmount = ({ checkValue, amount, setProductPrice, original, discount }: Params) => {
  if (checkValue >= +ProductsAmountOfUnitsMeasure.PCS && checkValue <= amount) {
    setProductPrice({ original: original * checkValue, discount: discount * checkValue });
    return true;
  }

  return false;
};
