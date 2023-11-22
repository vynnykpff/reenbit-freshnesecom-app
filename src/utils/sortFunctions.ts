import { Products } from "@/common/types";
import { SortingTypes, SortingVariants } from "@/common/constants";

type SortFunctionParams = (res: Products[], sortType: SortingTypes) => Products[];

export const sortFunctions: Record<SortingVariants, SortFunctionParams> = {
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
