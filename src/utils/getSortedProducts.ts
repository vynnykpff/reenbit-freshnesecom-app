import { SortingTypes } from "@/common/constants";
import { Product } from "@/common/types";

export const sortByPrice = (products: Product[], sortType: SortingTypes) => {
  return products.sort((a, b) => {
    const priceA = a.price ? (!a.price.discount ? a.price.original : a.price.discount) : 0;
    const priceB = b.price ? (!b.price.discount ? b.price.original : b.price.discount) : 0;

    return sortType === SortingTypes.ASC ? priceA - priceB : priceB - priceA;
  });
};

export const sortByRating = (products: Product[], sortType: SortingTypes) => {
  return products.sort((a, b) => {
    return sortType === SortingTypes.ASC ? a.rating - b.rating : b.rating - a.rating;
  });
};

export const sortByTitle = (products: Product[], sortType: SortingTypes) => {
  return products.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    return sortType === SortingTypes.ASC ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
};
