import { Dispatch, SetStateAction } from "react";

export type ProductSelectValue = {
  priceVariant: string;
  setPriceVariant: Dispatch<SetStateAction<string>>;
};

export type ProductValue = {
  inputValue: number;
  setInputValue: Dispatch<SetStateAction<number>>;
};
