import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  price?: number;
  unit?: string;
  amount?: number;
};

export const getProductPriceDependsOnUnit = (params: Params) => {
  const { unit, price, amount } = params;

  if (unit && price && amount) {
    if (unit === (ProductUnitsMeasure.PACK as string)) {
      return price * amount * ProductsAmountOfUnitsMeasure.PACK;
    }

    if (unit === (ProductUnitsMeasure.BOX as string)) {
      return price * amount * ProductsAmountOfUnitsMeasure.BOX;
    }

    return price * amount;
  }
};
