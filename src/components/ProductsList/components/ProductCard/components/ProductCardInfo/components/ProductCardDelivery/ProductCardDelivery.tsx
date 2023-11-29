import { FC } from "react";
import { getDeliveryTime } from "@/utils";
import { Product } from "@/common/types";
import { ProductDeliveryType } from "@/common/constants";
import styles from "./ProductCardDelivery.module.scss";

export const ProductCardDelivery: FC<Product["delivery"]> = ({ time, cost }) => {
  const handleGetDeliveryType = (): string => {
    return cost ? ProductDeliveryType.PAID : ProductDeliveryType.FREE;
  };

  return (
    <div className={styles.deliveryInfoContainer}>
      <p className={styles.deliveryType}>{handleGetDeliveryType()} Shipping</p>
      <p className={styles.deliveryDuration}>Delivery {getDeliveryTime(time)}</p>
    </div>
  );
};
