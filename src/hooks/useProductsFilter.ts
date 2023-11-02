import { ProductFilterType } from "@/common/constants";
import { Product } from "@/common/types";
import { useAppSelector } from "@/store";

export type ProductFilter = (p: Product, i: number, d: Product[]) => boolean;

const MERGED_PRODUCT_BRANDS = ProductFilterType.ALL_BRANDS.split("_").join("");

export const useProductsFilter = () => {
  const { products } = useAppSelector(state => state.products);
  const { searchValue, productBrand, productCategory } = useAppSelector(state => state.productsFilter);

  const filters: ProductFilter[] = [];

  if (!productCategory && !searchValue) {
    return products;
  }

  if (productCategory !== (ProductFilterType.ALL_CATEGORIES as string)) {
    filters.push(product => {
      return product.category.trim().toLowerCase().includes(productCategory.trim().toLowerCase());
    });
  }

  if (productBrand && !productBrand.startsWith(ProductFilterType.ALL_BRANDS)) {
    filters.push(product => {
      return productBrand.replaceAll(MERGED_PRODUCT_BRANDS, "").trim().toLowerCase().includes(product.brand.toLowerCase());
    });
  }

  if (searchValue) {
    filters.push(product => {
      return product.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase());
    });
  }

  let res = products;

  for (const filterCb of filters) {
    res = res.filter(filterCb);
  }

  return res;
};
