import { ProductPrice, ProductPriceBaseParams } from "@/common/types";
import { checkProductOnCorrectAmount } from "./checkProductOnCorrectAmount.ts";
import { resetProductPrice } from "./resetProductPrice.ts";
import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  value: number;
  currentOrderPriceVariant: string;
  productAmount: number;
} & ProductPriceBaseParams &
  Omit<ProductPrice, "currency">;

export const getProductPrice = ({
  value,
  original,
  discount,
  productAmount,
  currentOrderPriceVariant,
  setLocalInputValue,
  setLocalProductPrice,
  setNotification,
}: Params) => {
  if (currentOrderPriceVariant === (ProductUnitsMeasure.BOX as string)) {
    const checkValue = value * ProductsAmountOfUnitsMeasure.BOX;
    const res = checkProductOnCorrectAmount({ checkValue, productAmount, setLocalProductPrice, original, discount });

    if (!res) {
      resetProductPrice({
        original,
        discount,
        unitMeasure: ProductsAmountOfUnitsMeasure.BOX,
        setLocalProductPrice,
        setLocalInputValue,
        setNotification,
        checkValue,
      });
      return;
    }

    return;
  }

  if (currentOrderPriceVariant === (ProductUnitsMeasure.PACK as string)) {
    const checkValue = value * ProductsAmountOfUnitsMeasure.PACK;

    const res = checkProductOnCorrectAmount({ checkValue, productAmount, setLocalProductPrice, original, discount });

    if (!res) {
      resetProductPrice({
        original,
        discount,
        unitMeasure: ProductsAmountOfUnitsMeasure.PACK,
        setLocalProductPrice,
        setLocalInputValue,
        setNotification,
        checkValue,
      });
      return;
    }

    return;
  }

  const res = checkProductOnCorrectAmount({ checkValue: value, productAmount, setLocalProductPrice, original, discount });

  if (!res) {
    resetProductPrice({
      original,
      discount,
      unitMeasure: ProductsAmountOfUnitsMeasure.PCS,
      setLocalProductPrice,
      setLocalInputValue,
      setNotification,
      checkValue: value,
    });
    return;
  }

  return;
};
