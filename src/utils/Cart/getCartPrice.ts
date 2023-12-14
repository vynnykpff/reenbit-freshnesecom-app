import { getFixedPrice, getProductPriceDependsOnUnit } from "@/utils";
import { CartPayload } from "@/common/types";
import { DECIMAL_PLACES } from "@/common/constants";

const DEFAULT_VALUE = 0;
const DEFAULT_TAX = 0.17;
const COUNT_PERCENTAGE = 100;

export const getSubtotalPrice = (products: CartPayload[]): number => {
  return products.reduce((subtotal, product) => {
    const { price, amount, unit } = product;

    const productSubtotal = getProductPriceDependsOnUnit({ price, amount, unit });
    const subtotalPrice = subtotal + (productSubtotal ?? DEFAULT_VALUE);

    return getFixedPrice(subtotalPrice, DECIMAL_PLACES);
  }, DEFAULT_VALUE);
};

export const getPriceWithPromo = (subtotalPrice: number, discountPercentage: number): number => {
  const priceWithPromo = (subtotalPrice / COUNT_PERCENTAGE) * discountPercentage;
  return getFixedPrice(priceWithPromo, DECIMAL_PLACES);
};

export const getPriceWithTax = (subtotalPrice: number): number => {
  const taxAmount = subtotalPrice * DEFAULT_TAX;
  return getFixedPrice(taxAmount, DECIMAL_PLACES);
};
