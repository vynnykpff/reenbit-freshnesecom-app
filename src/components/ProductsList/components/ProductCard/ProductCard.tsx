import { FC } from "react";
import { motion } from "framer-motion";
import { animationVariants } from "@/common/constants";
import { Product } from "@/common/types";
import { ProductCardDetails, ProductCardImage, ProductCardInfo } from "./components";
import styles from "./ProductCard.module.scss";

export const ProductCard: FC<Product> = props => {
  return (
    <motion.li className={styles.productCardContainer} {...animationVariants}>
      <ProductCardImage images={props.images} title={props.title} />
      <div className={styles.productCardContentWrapper}>
        <ProductCardDetails {...props} />
        <ProductCardInfo price={props.price} delivery={props.delivery} title={props.title} />
      </div>
    </motion.li>
  );
};
