import { FC } from "react";
import { CartPricingDetails, CartPromo, CartTotalPriceAndDelivery } from "./components";
import styles from "./CartPricingSummary.module.scss";

export const CartPricingSummary: FC = () => {
  return (
    <div className={styles.cartPricingSummartContainer}>
      <CartPricingDetails />
      <CartPromo />
      <CartTotalPriceAndDelivery />
    </div>
  );
};
