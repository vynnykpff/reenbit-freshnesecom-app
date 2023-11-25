import { FC } from "react";
import cn from "classnames";
import { ProductCardPriceWithDiscount, ProductCardPriceWithoutDiscount } from "./components";
import styles from "./ProductCardPrice.module.scss";

export type Props = {
  className?: string | string[];
  discount: number;
  original: number;
  currency: string;
};

export const ProductCardPrice: FC<Props> = ({ className = ["", "", ""], currency, original, discount }) => {
  const handleCheckDiscount = () => {
    return !discount ? (
      <ProductCardPriceWithoutDiscount currency={currency} original={original} className={className[1]} />
    ) : (
      <ProductCardPriceWithDiscount discount={discount} original={original} currency={currency} className={className[2]} />
    );
  };

  return <div className={cn(styles.priceContainer, className[0])}>{handleCheckDiscount()}</div>;
};
