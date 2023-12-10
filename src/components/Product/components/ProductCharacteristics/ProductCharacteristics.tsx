import { FC } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { getAnimationVariant, getProductCharacteristics } from "@/utils";
import { Product } from "@/common/types";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductCharacteristics.module.scss";

type Props = {
  productCharacteristicsList: string[];
  className?: string | string[];
} & Product;

export const ProductCharacteristics: FC<Props> = ({ productCharacteristicsList = [], className = "", ...props }) => {
  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={cn(styles.productCharacteristicsList, className[0])}
    >
      {productCharacteristicsList.map(key => (
        <li className={cn(styles.productCharacteristicsItem, className[1])} key={key}>
          <span className={cn(styles.productCharacteristicsItemKey, className[2])}>{key}:</span>
          <span className={cn(styles.productCharacteristicsItemProperty, className[3])}>{getProductCharacteristics(props)[key]}</span>
        </li>
      ))}
    </motion.ul>
  );
};
