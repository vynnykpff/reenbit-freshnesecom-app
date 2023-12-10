import { FC } from "react";
import styles from "./CartTotalPriceAndDelivery.module.scss";

export const CartTotalPriceAndDelivery: FC = () => {
  return (
    <div className={styles.cartTotalPriceAndDeliveryContainer}>
      <div className={styles.cartDeliveryContainer}>
        <p className={styles.cartDeliveryTitle}>Total Order</p>
        <p className={styles.cartDeliveryInfo}>Guaranteed delivery day: June 12, 2020</p>
      </div>
      <p className={styles.cartTotalPriceContainer}>
        <span className={styles.cartTotalPrice}>89.84</span>&nbsp;USD
      </p>
    </div>
  );
};
