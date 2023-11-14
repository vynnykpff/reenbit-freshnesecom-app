import { Dispatch, SetStateAction } from "react";
import { Product } from "@/common/types";

export type ProductBrand = Product["brand"][];

export type ProductRating = Product["rating"][];

export type ProductFilterPrice = [number, number];

export type ProductsFilterState = {
  productCategory: Product["category"];
  productBrands: ProductBrand;
  productRatings: ProductRating;
  productPrice: ProductFilterPrice;
};

export type FiltersProps = {
  setIsShowFilters?: Dispatch<SetStateAction<boolean>>;
};
