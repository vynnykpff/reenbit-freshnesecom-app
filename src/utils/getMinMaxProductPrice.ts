import { Product, ProductSelectedPrice } from "@/common/types";

export const getMinMaxProductPrice = (products: Product[]) => {
  if (!products.length) {
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

export const getMinMaxSelectedPrice = (selectedPrices: ProductSelectedPrice) => {
  const minPrice = Array.isArray(selectedPrices) ? selectedPrices[0] : selectedPrices;
  const maxPrice = Array.isArray(selectedPrices) ? selectedPrices[1] : selectedPrices;

  return { minPrice, maxPrice };
};
