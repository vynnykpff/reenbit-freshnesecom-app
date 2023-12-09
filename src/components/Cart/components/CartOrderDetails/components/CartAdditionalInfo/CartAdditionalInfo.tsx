import { FC } from "react";
import { CartValidationForm } from "@/common/types";
import { CartSectionHeader } from "@/components/Cart";
import { CartAdditionalInfoFields } from "./components";
import { CartSectionConstants } from "@/common/constants";
import styles from "./CartAdditionalInfo.module.scss";

const additionalInfo = CartSectionConstants.additionalInfo;

export const CartAdditionalInfo: FC<CartValidationForm> = props => {
  return (
    <fieldset className={styles.cartAdditionalInfoContainer}>
      <CartSectionHeader {...additionalInfo} />
      <CartAdditionalInfoFields {...props} />
    </fieldset>
  );
};
