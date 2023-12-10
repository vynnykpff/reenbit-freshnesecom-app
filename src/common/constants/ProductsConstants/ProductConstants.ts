import { ProductCategory } from "@/common/types";
import { ProductFilterType } from "@/common/constants";

export const enum ProductDefaultValue {
  CATEGORIES = "All Categories",
  BRANDS = "All brands",
}

export const DEFAULT_CATEGORY: ProductCategory = {
  title: ProductDefaultValue?.CATEGORIES,
  id: ProductFilterType?.ALL_CATEGORIES,
  brands: { text: "", value: "" },
};
