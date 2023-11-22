import { ProductDefaultValue, ProductFilterType } from "@/common/constants";
import { Product, ProductCategory } from "@/common/types";
import { getTitleBrand } from "./getTitleBrand.ts";
import { getSlugString } from "./getSlugString.ts";

export const getProductsCategoriesWithBrands = (products: Product[]) => {
  const categoryData = products.reduce<Record<string, ProductCategory>>((acc, product) => {
    const { category, brand } = product;

    if (!acc[category]) {
      acc[category] = {
        title: category,
        id: getSlugString(category),
        brands: {
          [getTitleBrand(ProductFilterType.ALL_BRANDS, getSlugString(category))]: ProductDefaultValue.BRANDS,
        },
      };
    }

    acc[category].brands[getTitleBrand(getSlugString(brand), getSlugString(category))] = brand;

    return acc;
  }, {});

  return Object.values(categoryData);
};
