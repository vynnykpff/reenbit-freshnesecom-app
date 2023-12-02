import { FC, useState } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { CartAgreementListItem } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants, cartConfirmationItems } from "@/common/constants";
import styles from "./CartAgreementList.module.scss";

export const CartAgreementList: FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleToggleChecked = (itemId: string) => {
    setCheckedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
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
  );
};
