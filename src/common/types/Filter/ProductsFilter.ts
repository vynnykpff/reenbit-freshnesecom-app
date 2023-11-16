import { BaseState } from "@/common/types";
import { Dispatch, SetStateAction } from "react";

export type ProductsFilterState = {
  searchValue: string;
  productCategory: string;
  productBrand: string;
} & BaseState;

export type FiltersProps = {
  setIsShowFilters?: Dispatch<SetStateAction<boolean>>;
};
