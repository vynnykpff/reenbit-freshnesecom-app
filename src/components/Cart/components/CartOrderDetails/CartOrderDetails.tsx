import { FC } from "react";
import { CartAdditionalInfo, CartBillingInfo, CartConfirmationInfo } from "./components";
import styles from "./CartOrderDetails.module.scss";

export const CartOrderDetails: FC = () => {
  return (
    <div className={styles.cartOrderDetailsContainer}>
      <CartBillingInfo />
      <CartAdditionalInfo />
      <CartConfirmationInfo />
    </div>
  );
};
