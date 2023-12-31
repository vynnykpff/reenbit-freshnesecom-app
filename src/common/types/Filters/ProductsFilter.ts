import { Dispatch, SetStateAction } from "react";
import { Product } from "@/common/types";
import { SortingTypes, SortingVariants } from "@/common/constants";

export type ProductBrand = Product["brand"][];

export type ProductFilterPrice = [number, number];

export type ProductsFilterState = {
  productCategory: Product["category"];
  productBrands: ProductBrand;
  productRatings: number[];
  productPrice: ProductFilterPrice;
  sortBy: SortingVariants;
  sortType: SortingTypes;
};

export type FiltersProps = {
  setIsShowFilters?: Dispatch<SetStateAction<boolean>>;
};
