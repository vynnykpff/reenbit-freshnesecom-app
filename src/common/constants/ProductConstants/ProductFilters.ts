import { ProductsFilterState } from "@/common/types";

export const enum ProductFilterType {
  ALL_CATEGORIES = "all_categories",
  ALL_BRANDS = "all_brands",
}

export const PRODUCTS_PRICE_DEFAULT: ProductsFilterState["productPrice"] = [0, 0];

export const PRODUCT_RATING_DEFAULT = 0;
export const PRODUCT_INITIAL_PRICE = 0;

export const enum ProductPrices {
  MIN_PRICE,
  MAX_PRICE,
}
