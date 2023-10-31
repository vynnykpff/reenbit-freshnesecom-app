import { Product, ProductBrand, ProductCategory } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

const enum ProductDefaultBrand {
  TEXT = "All brands",
  VALUE = "all_brands",
}

export const getProductsCategoriesWithBrands = (products: Product[]) => {
  const categoryData = products.reduce<Record<string, ProductCategory>>((acc, product) => {
    const { category, brand } = product;

    const brandObject: ProductBrand = {
      text: brand,
      value: brand.toLowerCase(),
    };

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
      text: brandObject.text,
      value: brandObject.value,
    });

    return acc;
  }, {});

  return Object.values(categoryData);
};
