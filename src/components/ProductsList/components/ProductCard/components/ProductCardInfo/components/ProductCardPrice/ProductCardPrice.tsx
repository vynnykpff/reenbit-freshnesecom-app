import { FC } from "react";
import cn from "classnames";
import { getFixedPrice } from "@/utils";
import { ProductCardPriceWithDiscount, ProductCardPriceWithoutDiscount } from "./components";
import { DEFAULT_PRICE_CURRENCY } from "@/common/constants";
import styles from "./ProductCardPrice.module.scss";

export type Props = {
  className?: string | string[];
  discount: number;
  original: number;
  currency?: string;
};

const DECIMAL_PLACES = 2;

export const ProductCardPrice: FC<Props> = ({ className = ["", "", ""], currency = DEFAULT_PRICE_CURRENCY, original, discount }) => {
  const handleCheckDiscount = () => {
    return !discount ? (
      <ProductCardPriceWithoutDiscount currency={currency} original={getFixedPrice(original, DECIMAL_PLACES)} className={className[1]} />
    ) : (
      <ProductCardPriceWithDiscount
        discount={getFixedPrice(discount, DECIMAL_PLACES)}
        original={getFixedPrice(original, DECIMAL_PLACES)}
        currency={currency}
        className={className[2]}
      />
    );
  };

  return <div className={cn(styles.priceContainer, className[0])}>{handleCheckDiscount()}</div>;
};
