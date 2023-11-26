import { Dispatch, SetStateAction } from "react";
import { Products } from "@/common/types";
import { SortingTypes, SortingVariants } from "@/common/constants";

export type ProductBrand = Products["brand"][];

export type ProductFilterPrice = [number, number];

export type ProductsFilterState = {
  productCategory: Products["category"];
  productBrands: ProductBrand;
  productRatings: number[];
  productPrice: ProductFilterPrice;
  sortBy: SortingVariants;
  sortType: SortingTypes;
};

export type FiltersProps = {
  setIsShowFilters?: Dispatch<SetStateAction<boolean>>;
};
