import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getAnimationVariant } from "@/utils";
import { CartValidationForm } from "@/common/types";
import { CartAgreementListItem } from "./components";
import { AnimationDefaultDuration, CartErrorMessages, animationDefaultVariants, cartConfirmationItems } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./CartAgreementList.module.scss";

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
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });

    if (checkedItems.length >= 2) {
      setValue("confirmOrder", "confirmed");
      clearErrors("confirmOrder");
      return;
    }

    setError("confirmOrder", { type: "required", message: CartErrorMessages.REQUIRED_CONFIRMATION });
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
