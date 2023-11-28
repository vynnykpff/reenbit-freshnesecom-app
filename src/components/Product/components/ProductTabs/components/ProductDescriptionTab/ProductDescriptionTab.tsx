import { FC } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { getAnimationVariant } from "@/utils";
import { ProductDescriptionItem } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";

export const ProductDescriptionTab: FC = () => {
  const { product } = useAppSelector(state => state.product);

  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
      className={commonStyles.productTabsContentContainer}
    >
      {product.description.full.map(description => (
        <ProductDescriptionItem title={description.title} content={description.content} />
      ))}
    </motion.ul>
  );
};
