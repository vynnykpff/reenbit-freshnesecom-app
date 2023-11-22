import { FC } from "react";
import { Products } from "@/common/types";
import { DAY_DELIVERY, ProductDeliveryType } from "@/common/constants";
import styles from "./ProductCardDelivery.module.scss";

export const ProductCardDelivery: FC<Products["delivery"]> = ({ time, cost }) => {
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
