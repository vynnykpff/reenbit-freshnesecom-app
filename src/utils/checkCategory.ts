import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ProductCategory } from "@/common/types";

type Params = {
  currentProductCategoryWithBrands: string;
  productsCategoriesWithBrands: ProductCategory[];
  setCategory: ActionCreatorWithPayload<string>;
};

export const checkCategory = ({ currentProductCategoryWithBrands, productsCategoriesWithBrands, setCategory }: Params) => {
  if (!currentProductCategoryWithBrands) {
    return;
  }

  for (const item of productsCategoriesWithBrands) {
    if (currentProductCategoryWithBrands.includes(item.id)) {
      setCategory(item.id);
    }
  }
};
