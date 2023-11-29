import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { Product } from "@/common/types";
import { ProductCustomersReviews } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductInfo.module.scss";

type Props = {
  title: Product["title"];
  longDescription: string;
};

export const ProductInfo: FC<Props> = ({ title, longDescription }) => {
  return (
    <div className={styles.productInfoContainer}>
      <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}>
        <h4 className={styles.productInfoTitle}>{title}</h4>
        <ProductCustomersReviews />
      </motion.div>

      <motion.p
        className={styles.productDescription}
        {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      >
        {longDescription}
      </motion.p>
    </div>
  );
};
