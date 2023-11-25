import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import {
  AnimationDefaultDuration,
  ProductCharacteristicsOptions,
  ProductListCharacteristics,
  ProductListCharacteristicsKeys,
  animationDefaultVariants,
} from "@/common/constants";
import styles from "./ProductCharacteristics.module.scss";

const createRow = (rowIndex: number) => {
  const productCharacteristicsData = ProductListCharacteristicsKeys.slice(
    rowIndex * ProductCharacteristicsOptions.COLUMNS,
    (rowIndex + ProductCharacteristicsOptions.NEXT_ITEM) * ProductCharacteristicsOptions.COLUMNS,
  );

  return (
    <div className={styles.productCharacteristicsItemWrapper} key={rowIndex}>
      {productCharacteristicsData.map(key => (
        <li className={styles.productCharacteristicsItem} key={key}>
          <span className={styles.productCharacteristicsItemKey}>{key}:</span>
          <span className={styles.productCharacteristicsItemProperty}>{ProductListCharacteristics[key]}</span>
        </li>
      ))}
    </div>
  );
};

const createRows = () => {
  const rows = Array.from({ length: Math.ceil(ProductListCharacteristicsKeys.length / ProductCharacteristicsOptions.COLUMNS) });
  return rows.map((_, rowIndex) => createRow(rowIndex));
};

export const ProductCharacteristics: FC = () => {
  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.productCharacteristicsList}
    >
      {createRows()}
    </motion.ul>
  );
};
