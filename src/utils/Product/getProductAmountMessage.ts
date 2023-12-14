import { Dispatch, SetStateAction } from "react";
import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  priceVariant: string;
  setIsShowMessage: Dispatch<SetStateAction<boolean>>;
  setMessageOfAmountUnits?: Dispatch<SetStateAction<string>>;
};

export const getProductAmountMessage = ({ priceVariant, setIsShowMessage, setMessageOfAmountUnits }: Params) => {
  const variantTitles = {
    [ProductUnitsMeasure.BOX]: `${ProductsAmountOfUnitsMeasure.BOX} units in ${ProductUnitsMeasure.BOX}`,
    [ProductUnitsMeasure.PACK]: `${ProductsAmountOfUnitsMeasure.PACK} units in ${ProductUnitsMeasure.PACK}`,
  };

  const title = variantTitles[priceVariant as keyof typeof variantTitles];

  if (!title) {
    setIsShowMessage(false);
    return;
  }

  setIsShowMessage(true);

  if (setMessageOfAmountUnits) {
    setMessageOfAmountUnits(title);
  }
};
