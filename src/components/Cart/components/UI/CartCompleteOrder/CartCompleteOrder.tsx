import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { Button } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./CartCompleteOrder.module.scss";

export const CartCompleteOrder: FC = () => {
  return (
    <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}>
      <Button className={styles.cartCompleteOrderButton}>Complete order</Button>
    </motion.div>
  );
};
