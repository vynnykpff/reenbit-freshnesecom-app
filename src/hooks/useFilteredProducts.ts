import { useAppSelector } from "@/store";
import { applyTrimAndLowerCase, getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { ProductFilterType, SortingTypes, SortingVariants } from "@/common/constants";

export type ProductFilter = (p: Product, i: number, d: Product[]) => boolean;

const MERGED_PRODUCT_BRANDS = ProductFilterType.ALL_BRANDS.split("_").join("");

type SortFunction = (res: Product[], sortType: SortingTypes) => Product[];

const SortFunctions: Record<SortingVariants, SortFunction> = {
  [SortingVariants.PRICE](res, sortType) {
    return res.sort((a, b) => {
      const priceA = a.price ? (!a.price.discount ? a.price.original : a.price.discount) : 0;
      const priceB = b.price ? (!b.price.discount ? b.price.original : b.price.discount) : 0;

      return sortType === SortingTypes.ASC ? priceA - priceB : priceB - priceA;
    });
  },

  [SortingVariants.RATING](res, sortType) {
    return res.sort((a, b) => {
      return sortType === SortingTypes.ASC ? a.rating - b.rating : b.rating - a.rating;
    });
  },

  [SortingVariants.TITLE](res, sortType) {
    return res.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      return sortType === SortingTypes.ASC ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });
  },

  [SortingVariants.DEFAULT](res) {
    return res;
  },
};

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
    const formattedCategory = applyTrimAndLowerCase(productCategory);
    filters.push(product => applyTrimAndLowerCase(product.category) === formattedCategory);
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

  res = SortFunctions[sortBy](res, sortType);

  return res;
};
