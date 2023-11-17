import { Dispatch, SetStateAction } from "react";
import { ProductFilterPrice } from "@/common/types";

type Params = {
  defaultPrice: ProductFilterPrice;
  price: number;
  setSliderValue: Dispatch<SetStateAction<ProductFilterPrice>>;
};

export const checkMinPriceCorrectValue = ({ defaultPrice, price, setSliderValue }: Params) => {
  if (price > defaultPrice[1]) {
    setSliderValue(prev => [defaultPrice[1], prev[1]]);
  }

  if (price < defaultPrice[0]) {
    setSliderValue(prev => [defaultPrice[0], prev[1]]);
  }
};

export const checkMaxPriceCorrectValue = ({ defaultPrice, price, setSliderValue }: Params) => {
  if (price > defaultPrice[1]) {
    setSliderValue(prev => [prev[0], defaultPrice[1]]);
  }

  if (price < defaultPrice[0]) {
    setSliderValue(prev => [prev[0], defaultPrice[0]]);
  }
};
