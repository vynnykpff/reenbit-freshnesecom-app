import { FC } from "react";
import { CartValidationForm } from "@/common/types";
import { CartSectionHeader } from "@/components/Cart";
import { CartBillingInfoFields } from "./components";
import { CartSectionConstants } from "@/common/constants";
import styles from "./CartBillingInfo.module.scss";

const billingInfo = CartSectionConstants.billingInfo;

export const CartBillingInfo: FC<CartValidationForm> = props => {
  return (
    <fieldset className={styles.cartBillingInfoContainer}>
      <CartSectionHeader {...billingInfo} />
      <CartBillingInfoFields {...props} />
    </fieldset>
  );
};
