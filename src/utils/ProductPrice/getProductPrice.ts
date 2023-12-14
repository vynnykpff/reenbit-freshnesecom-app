import { checkProductOnCorrectAmount, resetProductPrice } from "@/utils";
import { ProductPrice, ProductPriceBaseParams } from "@/common/types";
import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  value: number;
  amount: number;
  priceVariant: string;
} & ProductPriceBaseParams &
  Omit<ProductPrice, "currency">;

export const getProductPrice = ({
  value,
  original,
  discount,
  amount,
  priceVariant,
  setInputValue,
  setProductPrice,
  setNotification,
}: Params) => {
  if (priceVariant === (ProductUnitsMeasure.BOX as string)) {
    const checkValue = value * ProductsAmountOfUnitsMeasure.BOX;
    const res = checkProductOnCorrectAmount({ checkValue, amount, setProductPrice, original, discount });

    if (!res) {
      resetProductPrice({
        original,
        discount,
        unitMeasure: ProductsAmountOfUnitsMeasure.BOX,
        setProductPrice,
        setInputValue,
        setNotification,
        checkValue,
      });
      return;
    }

    return;
  }

  if (priceVariant === (ProductUnitsMeasure.PACK as string)) {
    const checkValue = value * ProductsAmountOfUnitsMeasure.PACK;

    const res = checkProductOnCorrectAmount({ checkValue, amount, setProductPrice, original, discount });

    if (!res) {
      resetProductPrice({
        original,
        discount,
        unitMeasure: ProductsAmountOfUnitsMeasure.PACK,
        setProductPrice,
        setInputValue,
        setNotification,
        checkValue,
      });
      return;
    }

    return;
  }

  const res = checkProductOnCorrectAmount({ checkValue: value, amount, setProductPrice, original, discount });

  if (!res) {
    resetProductPrice({
      original,
      discount,
      unitMeasure: ProductsAmountOfUnitsMeasure.PCS,
      setProductPrice,
      setInputValue,
      setNotification,
      checkValue: value,
    });
    return;
  }

  return;
};
