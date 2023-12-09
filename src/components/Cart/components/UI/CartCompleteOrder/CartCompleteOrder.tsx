import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { Button } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./CartCompleteOrder.module.scss";

type Props = {
  handleSubmit: () => void;
  isDisabled: boolean;
};

export const CartCompleteOrder: FC<Props> = ({ handleSubmit, isDisabled }) => {
  return (
    <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}>
      <Button onClick={handleSubmit} disabled={isDisabled} className={styles.cartCompleteOrderButton}>
        Complete order
      </Button>
    </motion.div>
  );
};
