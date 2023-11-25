import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { Products } from "@/common/types";
import { ProductCardDetails, ProductCardImage, ProductCardInfo } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductCard.module.scss";

export const ProductCard: FC<Products> = props => {
  return (
    <motion.li
      className={styles.productCardContainer}
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
    >
      <ProductCardImage {...props} />
      <div className={styles.productCardContentWrapper}>
        <ProductCardDetails {...props} />
        <ProductCardInfo {...props} />
      </div>
    </motion.li>
  );
};
