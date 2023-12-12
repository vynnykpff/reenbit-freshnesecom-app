import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getAnimationVariant } from "@/utils";
import { CartValidationForm } from "@/common/types";
import { CartAgreementListItem } from "./components";
import {
  AnimationDefaultDuration,
  CartErrorMessages,
  CartFormFields,
  animationDefaultVariants,
  cartConfirmationItems,
} from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./CartAgreementList.module.scss";

const MIN_CHECKED_ITEMS = 2;

export const CartAgreementList: FC<CartValidationForm> = ({ setValue, setError, errors, clearErrors }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const { country } = useAppSelector(state => state.cart.fields);

  useChangeEffect(() => {
    if (!country.length) {
      setCheckedItems([]);
    }
  }, [country]);

  const handleToggleChecked = (itemId: string) => {
    setCheckedItems(prev => {
      const updatedItems = prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId];

      if (updatedItems.length >= MIN_CHECKED_ITEMS) {
        clearErrors(CartFormFields.CONFIRM_ORDER);
        setValue(CartFormFields.CONFIRM_ORDER, "confirmed");
      } else {
        setError(CartFormFields.CONFIRM_ORDER, { type: "required", message: CartErrorMessages.REQUIRED_CONFIRMATION });
      }

      return updatedItems;
    });
  };

  return (
    <div className={commonStyles.cartInputContainer}>
      <motion.ul
        className={styles.cartConfirmationInfoAgreementList}
        {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      >
        {cartConfirmationItems.map(item => (
          <CartAgreementListItem
            key={item.id}
            {...item}
            isChecked={checkedItems.includes(item.id)}
            onToggleChecked={() => handleToggleChecked(item.id)}
          />
        ))}
      </motion.ul>
      <div className={commonStyles.cartFieldErrorMessage}>{errors?.confirmOrder?.message}</div>
    </div>
  );
};
