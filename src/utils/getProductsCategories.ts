import { getSlugString } from "./getSlugString.ts";
import { ProductDefaultValue, ProductFilterType } from "@/common/constants";
import { Product, SelectVariants } from "@/common/types";

export const getProductsCategories = (productsCategories: Product[]) => {
  const res: SelectVariants = {
    [ProductFilterType.ALL_CATEGORIES]: ProductDefaultValue.CATEGORIES,
  };

  for (const category of productsCategories) {
    const categoryValue = getSlugString(category.category);

    if (!res[categoryValue]) {
      res[categoryValue] = category.category;
    }
  }

  return res;
};
