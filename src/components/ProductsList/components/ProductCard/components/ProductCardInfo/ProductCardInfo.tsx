import { ProductCardDelivery, ProductCardNavigation, ProductCardPrice } from "./components";
import { FC } from "react";
import styles from "./ProductCardInfo.module.scss";

export const ProductCardInfo: FC = () => {
  return (
    <div className={styles.productInfoContainer}>
      <ProductCardPrice />
      <ProductCardDelivery />
      <ProductCardNavigation />
    </div>
  );
};
