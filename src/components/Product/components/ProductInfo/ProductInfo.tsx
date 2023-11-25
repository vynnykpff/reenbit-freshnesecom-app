import { getAnimationVariant } from "@/utils";
import { FC } from "react";
import { motion } from "framer-motion";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import { ProductCustomersReviews } from "./components";
import styles from "./ProductInfo.module.scss";

export const ProductInfo: FC = () => {
  return (
    <div className={styles.productInfoContainer}>
      <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}>
        <h4 className={styles.productInfoTitle}>Carrots from Tom Farm</h4>
        <ProductCustomersReviews />
      </motion.div>

      <motion.p
        className={styles.productDescription}
        {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      >
        Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. To
        misso’s carrots are growing on the fields naturally.
      </motion.p>
    </div>
  );
};
