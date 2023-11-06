import { Product } from "@/common/types";

export const getMinMaxProductPrice = (products: Product[]) => {
  if (products.length === 0) {
    return { minPrice: 0, maxPrice: 0 };
  }

  const initialPrice = products[0].price.discount || products[0].price.original;

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
