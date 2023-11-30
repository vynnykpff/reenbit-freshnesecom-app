import { FC } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { getAnimationVariant } from "@/utils";
import { ProductHeaderTab } from "./components";
import { AnimationDefaultDuration, ProductTabsKeys, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductHeaderTabs.module.scss";

export const ProductHeaderTabs: FC = () => {
  const { product } = useAppSelector(state => state.product);
  const productTabsData = [0, product.reviews.length, product.questions.length];

  return (
    <motion.div
      className={styles.productTabsHeaderContainer}
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.TERTIARY })}
    >
      <ul className={styles.productTabsHeaderList}>
        {ProductTabsKeys.map((productTab, index) => (
          <ProductHeaderTab key={index} amountItems={productTabsData[index]} title={productTab} />
        ))}
      </ul>
    </motion.div>
  );
};
