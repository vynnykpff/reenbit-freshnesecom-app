import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { CartInput } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants, cartBillingInfoItems } from "@/common/constants";
import styles from "./CartBillingInfoFields.module.scss";

export const CartBillingInfoFields: FC = () => {
  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.cartBillingInfoFormContainer}
    >
      {cartBillingInfoItems.map(field => (
        <CartInput key={field.id} {...field} />
      ))}
    </motion.div>
  );
};
