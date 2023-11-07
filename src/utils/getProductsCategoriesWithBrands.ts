import { Product, ProductCategory } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

const enum ProductDefaultBrand {
  TEXT = "All brands",
  VALUE = "all_brands",
}

export const getProductsCategoriesWithBrands = (products: Product[]) => {
  const categoryData = products.reduce<Record<string, ProductCategory>>((acc, product) => {
    const { category, brand } = product;

    if (!acc[category]) {
      acc[category] = {
        title: category,
        id: getSlugString(category),
        brands: {
          [`${ProductDefaultBrand.VALUE}_${getSlugString(category)}`]: ProductDefaultBrand.TEXT,
        },
      };
    }

    acc[category].brands[`${brand.toLowerCase()}_${getSlugString(category)}`] = brand;

    return acc;
  }, {});

  return Object.values(categoryData);
};
