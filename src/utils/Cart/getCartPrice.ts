import { getFixedPrice, getProductPriceDependsOnUnit } from "@/utils";
import { CartPayload } from "@/common/types";

const DEFAULT_VALUE = 0;
const DESIMIAL_PLACES = 2;
const DEFAULT_TAX = 0.17;
const COUNT_PERCENTAGE = 100;

export const getSubtotalPrice = (products: CartPayload[]): number => {
  return products.reduce((subtotal, product) => {
    const { price, amount, unit } = product;

    const productSubtotal = getProductPriceDependsOnUnit({ price, amount, unit });

    return subtotal + (productSubtotal ?? DEFAULT_VALUE);
  }, DEFAULT_VALUE);
};

export const getPriceWithPromo = (subtotalPrice: number, discountPercentage: number): number => {
  return (subtotalPrice / COUNT_PERCENTAGE) * discountPercentage;
};

export const getPriceWithTax = (subtotalPrice: number): number => {
  const taxAmount = subtotalPrice * DEFAULT_TAX;
  return getFixedPrice(taxAmount, DESIMIAL_PLACES);
};
