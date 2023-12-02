import { FC } from "react";
import { CartCompleteOrder, CartOrderDetails, CartOrderSummary } from "./components";
import styles from "./Cart.module.scss";

export const Cart: FC = () => {
  return (
    <form className={styles.cartContainer}>
      <div className={styles.cartOrderWrapper}>
        <CartOrderDetails />
        <CartOrderSummary />
      </div>
      <CartCompleteOrder />
    </form>
  );
};
