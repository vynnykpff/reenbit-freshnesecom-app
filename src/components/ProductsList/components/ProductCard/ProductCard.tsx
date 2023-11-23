import { FC } from "react";
import { motion } from "framer-motion";
import { Product } from "@/common/types";
import { ProductCardDetails, ProductCardImage, ProductCardInfo } from "./components";
import { animationVariants } from "@/common/constants";
import styles from "./ProductCard.module.scss";

export const ProductCard: FC<Product> = props => {
  return (
    <motion.li className={styles.productCardContainer} {...animationVariants}>
      <ProductCardImage {...props} />
      <div className={styles.productCardContentWrapper}>
        <ProductCardDetails {...props} />
        <ProductCardInfo {...props} />
      </div>
    </motion.li>
  );
};
