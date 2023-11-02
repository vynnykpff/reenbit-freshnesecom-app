import { ProductCategory } from "@/common/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type Props = {
  currentProductCategoryWithBrands: string;
  productsCategoriesWithBrands: ProductCategory[];
  setCategory: ActionCreatorWithPayload<string>;
};

export const checkCategory = ({ currentProductCategoryWithBrands, productsCategoriesWithBrands, setCategory }: Props) => {
  if (!currentProductCategoryWithBrands) {
    return;
  }

  for (const item of productsCategoriesWithBrands) {
    if (currentProductCategoryWithBrands.includes(item.id)) {
      setCategory(item.id);
    }
  }
};
