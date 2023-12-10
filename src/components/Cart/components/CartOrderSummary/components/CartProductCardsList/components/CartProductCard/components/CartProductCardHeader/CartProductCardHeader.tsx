import { FC } from "react";
import { useAppSelector } from "@/store";
import styles from "./CartProductCardHeader.module.scss";

export const CartProductCardHeader: FC = () => {
  const { product } = useAppSelector(state => state.product);

  return (
    <div className={styles.productCardHeaderContainer}>
      <h5 className={styles.productCardHeaderTitle}>{product.title}</h5>
    </div>
  );
};
