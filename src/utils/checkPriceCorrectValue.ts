import { ProductPrices } from "@/common/constants";
import { ProductFilterPrice } from "@/common/types";
import { Dispatch, SetStateAction } from "react";

type Params = {
  defaultPrice: ProductFilterPrice;
  price: number;
  setSliderValue: Dispatch<SetStateAction<ProductFilterPrice>>;
};

export const checkMinPriceCorrectValue = ({ defaultPrice, price, setSliderValue }: Params) => {
  if (price > defaultPrice[ProductPrices.MIN_PRICE]) {
    setSliderValue(prev => [defaultPrice[ProductPrices.MAX_PRICE], prev[ProductPrices.MAX_PRICE]]);
  }

  if (price < defaultPrice[ProductPrices.MIN_PRICE]) {
    setSliderValue(prev => [defaultPrice[ProductPrices.MIN_PRICE], prev[ProductPrices.MAX_PRICE]]);
  }
};

export const checkMaxPriceCorrectValue = ({ defaultPrice, price, setSliderValue }: Params) => {
  if (price > defaultPrice[ProductPrices.MAX_PRICE]) {
    setSliderValue(prev => [prev[ProductPrices.MIN_PRICE], defaultPrice[ProductPrices.MAX_PRICE]]);
  }

  if (price < defaultPrice[ProductPrices.MIN_PRICE]) {
    setSliderValue(prev => [prev[ProductPrices.MIN_PRICE], defaultPrice[ProductPrices.MIN_PRICE]]);
  }
};
