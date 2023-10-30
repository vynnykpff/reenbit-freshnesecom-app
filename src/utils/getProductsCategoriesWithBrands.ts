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
        brand: [
          {
            text: ProductDefaultBrand.TEXT,
            value: ProductDefaultBrand.VALUE,
          },
        ],
      };
    }

    const categoryBrands = acc[category].brand;
    categoryBrands.push({
      text: brand.text,
      value: brand.value,
    });

    return acc;
  }, {});

  return Object.values(categoryData);
};
