import { BaseState, Product } from "@/common/types";
import { Dispatch, SetStateAction } from "react";

export type ProductBrand = {
  brand: Product["brand"];
};

export type ProductRating = {
  rating: Product["rating"];
};

export type ProductsFilterState = {
  searchValue: string;
  productCategory: string;
  productBrand: ProductBrand[];
  productRating: ProductRating[];
} & BaseState;

export type FiltersProps = {
  setIsShowFilters?: Dispatch<SetStateAction<boolean>>;
};
