import { ProductFilterType } from "@/common/constants";
import { Product } from "@/common/types";
import { useAppSelector } from "@/store";
import { applyTrimAndLowerCase } from "@/utils";

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
    const formattedCategory = applyTrimAndLowerCase(productCategory);
    filters.push(product => applyTrimAndLowerCase(product.category).includes(formattedCategory));
  }

  if (productBrand && !productBrand.startsWith(ProductFilterType.ALL_BRANDS)) {
    const formattedBrand = applyTrimAndLowerCase(productBrand.replaceAll(MERGED_PRODUCT_BRANDS, ""));
    filters.push(product => formattedBrand.includes(applyTrimAndLowerCase(product.brand)));
  }

  if (searchValue) {
    const formattedSearchValue = applyTrimAndLowerCase(searchValue);
    filters.push(product => applyTrimAndLowerCase(product.title).includes(formattedSearchValue));
  }

  let res = products;
  for (const filterCb of filters) {
    res = res.filter(filterCb);
  }
  return res;
};
