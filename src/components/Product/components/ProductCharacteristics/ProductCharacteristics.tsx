import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant, getProductCharacteristics } from "@/utils";
import { Products } from "@/common/types";
import { ProductCharacteristicsRows } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductCharacteristics.module.scss";

export const ProductCharacteristics: FC<Products> = props => {
  const productCharacteristicsKeys = Object.keys(getProductCharacteristics(props));

  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.productCharacteristicsList}
    >
      <ProductCharacteristicsRows
        productCharacteristicsKeys={productCharacteristicsKeys}
        productCharacteristicsList={getProductCharacteristics(props)}
      />
    </motion.ul>
  );
};
