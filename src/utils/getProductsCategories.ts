import { Products, SelectVariants } from "@/common/types";
import { ProductDefaultValue, ProductFilterType } from "@/common/constants";
import { getSlugString } from "./getSlugString.ts";

export const getProductsCategories = (productsCategories: Products[]) => {
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
