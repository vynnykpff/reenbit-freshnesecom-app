import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { Button, NoMatches } from "@/components/UI";
import { AnimationDefaultDuration, Routes, animationDefaultVariants } from "@/common/constants";
import styles from "./EmptyCart.module.scss";

const EMPTY_CART_TITLE = "Your cart is empty";

export const EmptyCart: FC = () => {
  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.emptyCartContainer}
    >
      <NoMatches title={EMPTY_CART_TITLE} className={[styles.emptyCartWrapper]} />
      <Link to={Routes.PRODUCTS}>
        <Button>Go shopping!</Button>
      </Link>
    </motion.div>
  );
};
