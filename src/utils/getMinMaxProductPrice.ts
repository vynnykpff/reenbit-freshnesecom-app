import { PRODUCT_INITIAL_PRICE, ProductPrices } from "@/common/constants";
import { ProductSelectedPrice, Products } from "@/common/types";

export const getMinMaxProductPrice = (products: Products[]) => {
  if (!products.length) {
    return { minPrice: ProductPrices.MIN_PRICE, maxPrice: ProductPrices.MAX_PRICE };
  }

  const initialPrice = products[PRODUCT_INITIAL_PRICE].price.discount || products[PRODUCT_INITIAL_PRICE].price.original;

  const initialPrices = {
    minPrice: initialPrice,
    maxPrice: initialPrice,
  };

  const { minPrice, maxPrice } = products.reduce((prices, product) => {
    return {
      minPrice: Math.min(prices.minPrice, product.price.discount || product.price.original),
      maxPrice: Math.max(prices.maxPrice, product.price.discount || product.price.original),
    };
  }, initialPrices);

  return { minPrice, maxPrice };
};

export const getMinMaxSelectedPrice = (selectedPrices: ProductSelectedPrice) => {
  const minPrice = Array.isArray(selectedPrices) ? selectedPrices[ProductPrices.MIN_PRICE] : selectedPrices;
  const maxPrice = Array.isArray(selectedPrices) ? selectedPrices[ProductPrices.MAX_PRICE] : selectedPrices;

  return { minPrice, maxPrice };
};
