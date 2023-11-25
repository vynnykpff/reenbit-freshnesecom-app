import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import { ProductInfoNotification } from "@/components/UI";
import styles from "./ProductNotification.module.scss";

export const ProductNotification: FC = () => {
  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
      className={styles.productInfoNotificationContainer}
    >
      <ProductInfoNotification className={["", styles.productInfoNotification]} count={"-36 %"} />
      <ProductInfoNotification className={["", styles.productInfoNotification]} count={"Free shipping"} />
    </motion.div>
  );
};
