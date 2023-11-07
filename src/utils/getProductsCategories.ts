import { Product, SelectVariants } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

const enum ProductDefaultCategory {
  TEXT = "All Categories",
  VALUE = "all_categories",
}

export const getProductsCategories = (productsCategories: Product[]) => {
  const res: SelectVariants = {
    [ProductDefaultCategory.VALUE]: ProductDefaultCategory.TEXT,
  };

  for (const category of productsCategories) {
    const categoryValue = getSlugString(category.category);

    if (!res[categoryValue]) {
      res[categoryValue] = category.category;
    }
  }

  return res;
};
