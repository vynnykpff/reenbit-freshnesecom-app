import { Product } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

const enum ProductDefaultCategory {
  TEXT = "All Categories",
  VALUE = "all_categories",
}

export const getProductsCategories = (productsCategories: Product[]) => {
  const uniqueCategories = new Set();
  const uniqueCategoriesArray = [];

  for (const category of productsCategories) {
    const categoryValue = getSlugString(category.category);

    if (!uniqueCategories.has(categoryValue)) {
      uniqueCategories.add(categoryValue);
      uniqueCategoriesArray.push({
        text: category.category,
        value: categoryValue,
      });
    }
  }

  uniqueCategoriesArray.unshift({
    text: ProductDefaultCategory.TEXT,
    value: ProductDefaultCategory.VALUE,
  });

  return uniqueCategoriesArray;
};
