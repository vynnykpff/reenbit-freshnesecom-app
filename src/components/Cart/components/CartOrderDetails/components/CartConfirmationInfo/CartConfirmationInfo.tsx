import { FC } from "react";
import { CartValidationForm } from "@/common/types";
import { CartSectionHeader } from "@/components/Cart";
import { CartAgreementList } from "./components";
import { CartSectionConstants } from "@/common/constants";
import styles from "./CartConfirmationInfo.module.scss";

const confirmationInfo = CartSectionConstants.confirmation;

export const CartConfirmationInfo: FC<CartValidationForm> = props => {
  return (
    <fieldset className={styles.cartConfirmationInfoContainer}>
      <CartSectionHeader {...confirmationInfo} />
      <CartAgreementList {...props} />
    </fieldset>
  );
};
