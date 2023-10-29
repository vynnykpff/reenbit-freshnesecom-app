import { FC } from "react";
import styles from "./ProductCardPrice.module.scss";

export const ProductCardPrice: FC = () => {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.totalPriceContainer}>
        <p className={styles.discountPrice}>36.99</p>
        <span className={styles.priceCurrency}>USD</span>
      </div>
      <p className={styles.originalPrice}>48.56</p>
    </div>
  );
};
