import { useAppSelector } from "@/store";
import { applyTrimAndLowerCase, getSlugString, sortFunctions } from "@/utils";
import { Product } from "@/common/types";
import { ProductFilterType } from "@/common/constants";

export type ProductFilter = (p: Product, i: number, d: Product[]) => boolean;

const MERGED_PRODUCT_BRANDS = ProductFilterType.ALL_BRANDS.split("_").join("");

export const useFilteredProducts = () => {
  const { products, searchValue } = useAppSelector(state => state.products);
  const { productBrands, productCategory, productRatings, productPrice, sortBy, sortType } = useAppSelector(state => state.productsFilter);
  const filters: ProductFilter[] = [];

  if (productRatings.length) {
    filters.push(product => productRatings.some(item => item === product.rating));
  }

  if (productCategory === (ProductFilterType.ALL_CATEGORIES as string) && !searchValue && !productBrands.length && !productRatings) {
    return products;
  }

  if (productCategory !== (ProductFilterType.ALL_CATEGORIES as string)) {
    const formattedCategory = getSlugString(productCategory);
    filters.push(product => getSlugString(product.category) === formattedCategory);
  }

  if (productBrands.length && !productBrands[0].startsWith(ProductFilterType.ALL_BRANDS)) {
    const formattedBrands = productBrands.map(brandObj => {
      return applyTrimAndLowerCase(brandObj.replaceAll(MERGED_PRODUCT_BRANDS, ""));
    });

    filters.push(product => formattedBrands.some(formattedBrand => formattedBrand.includes(getSlugString(product.brand))));
  }

  if (productPrice[0] && productPrice[1]) {
    filters.push(product => {
      if (!product.price.discount) {
        return product.price.original >= productPrice[0] && product.price.original <= productPrice[1];
      } else {
        return product.price.discount >= productPrice[0] && product.price.discount <= productPrice[1];
      }
    });
  }

  if (searchValue) {
    const formattedSearchValue = applyTrimAndLowerCase(searchValue);
    filters.push(product => applyTrimAndLowerCase(product.title).includes(formattedSearchValue));
  }

  let res = [...products];

  for (const filterCb of filters) {
    res = res.filter(filterCb);
  }

  res = sortFunctions[sortBy](res, sortType);

  return res;
};
