import { useMatchMedia } from "@/hooks";
import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant, getProductCharacteristics } from "@/utils";
import { Product } from "@/common/types";
import { AnimationDefaultDuration, MOBILE_ORDER_LIST, MediaQueries, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductCharacteristics.module.scss";

export const ProductCharacteristics: FC<Product> = props => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.PRODUCT_CARDS_CONTAINER}px)`);
  const productCharacteristicsKeys = isMobile ? MOBILE_ORDER_LIST : Object.keys(getProductCharacteristics(props));

  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.productCharacteristicsList}
    >
      {productCharacteristicsKeys.map(key => (
        <li className={styles.productCharacteristicsItem} key={key}>
          <span className={styles.productCharacteristicsItemKey}>{key}:</span>
          <span className={styles.productCharacteristicsItemProperty}>{getProductCharacteristics(props)[key]}</span>
        </li>
      ))}
    </motion.ul>
  );
};
