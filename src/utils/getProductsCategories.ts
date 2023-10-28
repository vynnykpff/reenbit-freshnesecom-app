import { ProductCategory } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

const enum ProductDefaultCategory {
  TEXT = "All Categories",
  VALUE = "all_categories",
}

export const getProductsCategories = (productsCategories: ProductCategory[]) => {
  const categories = productsCategories.map((category: ProductCategory) => ({
    text: category.title,
    value: getSlugString(category.title),
  }));
  categories.unshift({ text: ProductDefaultCategory.TEXT, value: ProductDefaultCategory.VALUE });
  return categories;
};
