import { FC } from "react";
import { Products } from "@/common/types";
import { ProductCardPriceWithDiscount, ProductCardPriceWithoutDiscount } from "./components";
import styles from "./ProductCardPrice.module.scss";

export const ProductCardPrice: FC<Products["price"]> = props => {
  const handleCheckDiscount = () => {
    return !props.discount ? <ProductCardPriceWithoutDiscount {...props} /> : <ProductCardPriceWithDiscount {...props} />;
  };

  return <div className={styles.priceContainer}>{handleCheckDiscount()}</div>;
};
