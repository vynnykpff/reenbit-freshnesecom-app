import { FC } from "react";
import { ProductDeliveryType } from "@/common/constants";
import { Product } from "@/common/types";
import styles from "./ProductCardDelivery.module.scss";

export const ProductCardDelivery: FC<Product["delivery"]> = ({ time, cost }) => {
  const handleGetDeliveryType = (): string => {
    return cost ? ProductDeliveryType.PAID : ProductDeliveryType.FREE;
  };

  return (
    <div className={styles.deliveryInfoContainer}>
      <p className={styles.deliveryType}>{handleGetDeliveryType()} Shipping</p>
      <p className={styles.deliveryDuration}>Delivery in {time} day</p>
    </div>
  );
};
