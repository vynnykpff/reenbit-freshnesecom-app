import { FC } from "react";
import styles from "./ProductCardDelivery.module.scss";

export const ProductCardDelivery: FC = () => {
  return (
    <div className={styles.deliveryInfoContainer}>
      <p className={styles.deliveryType}>Free Shipping</p>
      <p className={styles.deliveryDuration}>Delivery in 1 day</p>
    </div>
  );
};
