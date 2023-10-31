import { FC } from "react";
import { ProductDeliveryType } from "@/common/constants";
import { Product } from "@/common/types";
import styles from "./ProductCardDelivery.module.scss";

const DAY_DELIVERY = 1;

export const ProductCardDelivery: FC<Product["delivery"]> = ({ time, cost }) => {
  const handleGetDeliveryType = (): string => {
    return cost ? ProductDeliveryType.PAID : ProductDeliveryType.FREE;
  };

  const handleGetDeliveryTime = () => {
    return time > DAY_DELIVERY ? `${time} days` : `${time} day`;
  };

  return (
    <div className={styles.deliveryInfoContainer}>
      <p className={styles.deliveryType}>{handleGetDeliveryType()} Shipping</p>
      <p className={styles.deliveryDuration}>Delivery in {handleGetDeliveryTime()}</p>
    </div>
  );
};
