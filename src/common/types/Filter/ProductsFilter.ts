import { BaseState } from "@/common/types";

export type ProductsFilterState = {
  searchValue: string;
  productCategory: string;
  productBrand: string;
} & BaseState;
