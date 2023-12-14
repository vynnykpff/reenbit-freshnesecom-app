import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { CartSectionHeader } from "@/components/Cart";
import { CartPricingSummary, CartProductCardsList } from "./components";
import { AnimationDefaultDuration, CartSectionConstants, animationDefaultVariants } from "@/common/constants";
import styles from "./CartOrderSummary.module.scss";

const orderSummary = CartSectionConstants.order;

export const CartOrderSummary: FC = () => {
  return (
    <motion.div
      className={styles.cartOrderSummaryContainer}
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
    >
      <CartSectionHeader {...orderSummary} />
      <CartProductCardsList />
      <CartPricingSummary />
    </motion.div>
  );
};
