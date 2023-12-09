import { FC } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { getAnimationVariant } from "@/utils";
import { CartBillingInfoItem, CartValidationForm } from "@/common/types";
import { CartPhoneInput } from "@/components/UI";
import { CartCityField, CartCountryField, CartStateField, CartUniversalField } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants, cartBillingInfoItems } from "@/common/constants";
import styles from "./CartBillingInfoFields.module.scss";

export const CartBillingInfoFields: FC<CartValidationForm> = props => {
  const { fields } = useAppSelector(state => state.cart);

  const renderField = (field: CartBillingInfoItem, index: number) => {
    const commonProps = { key: field.id, fieldValue: fields[field.fieldName], ...field, ...props };

    switch (field.fieldName) {
      case "phoneNumber":
        return <CartPhoneInput disabled={!fields.city} {...commonProps} />;
      case "country":
        return <CartCountryField {...commonProps} />;
      case "state":
        return <CartStateField {...commonProps} />;
      case "city":
        return <CartCityField {...commonProps} />;
      default:
        return <CartUniversalField index={index} {...commonProps} />;
    }
  };

  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.cartBillingInfoFormContainer}
    >
      {cartBillingInfoItems.map(renderField)}
    </motion.div>
  );
};
