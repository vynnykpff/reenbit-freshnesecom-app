import { Product, ProductCategory } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

const enum ProductDefaultBrand {
  TEXT = "All brands",
  VALUE = "all_brands",
}

export const getProductsCategoriesWithBrands = (products: Product[]) => {
  const categoryData = products.reduce<Record<string, ProductCategory>>((acc, product) => {
    const { category, brands } = product;

    if (!acc[category]) {
      acc[category] = {
        title: category,
        id: getSlugString(category),
        brands: [
          {
            text: ProductDefaultBrand.TEXT,
            value: ProductDefaultBrand.VALUE,
          },
        ],
      };
    }

    const categoryBrands = acc[category].brands;
    brands.forEach(brand => {
      categoryBrands.push({
        text: brand.text,
        value: brand.value,
      });
    });

    return acc;
  }, {});

  return Object.values(categoryData);
};
