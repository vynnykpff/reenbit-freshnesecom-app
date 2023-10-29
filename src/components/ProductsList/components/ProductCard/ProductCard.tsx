import { FC } from "react";
import { ProductCardDetails, ProductCardImage, ProductCardInfo } from "./components";
import styles from "./ProductCard.module.scss";

export const ProductCard: FC = () => {
  return (
    <div className={styles.productCardContainer}>
      <ProductCardImage />
      <div className={styles.productCardContentWrapper}>
        <ProductCardDetails />
        <ProductCardInfo />
      </div>
    </div>
  );
};
