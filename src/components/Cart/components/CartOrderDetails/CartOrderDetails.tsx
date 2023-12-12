import { FC } from "react";
import { CartValidationForm } from "@/common/types";
import { CartAdditionalInfo, CartBillingInfo, CartConfirmationInfo } from "./components";
import styles from "./CartOrderDetails.module.scss";

export const CartOrderDetails: FC<CartValidationForm> = props => {
  return (
    <div className={styles.cartOrderDetailsContainer}>
      <CartBillingInfo {...props} />
      <CartAdditionalInfo {...props} />
      <CartConfirmationInfo {...props} />
    </div>
  );
};
