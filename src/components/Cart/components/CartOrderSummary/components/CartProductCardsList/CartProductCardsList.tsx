import { FC } from "react";
import { CartProductCard } from "./components";
import styles from "./CartProductCardsList.module.scss";

export const CartProductCardsList: FC = () => {
  return (
    <ul className={styles.productCardsList}>
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </ul>
  );
};
