import { FC } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { useAppSelector } from "@/store";
import { getAnimationVariant } from "@/utils";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductGallery.module.scss";

export const ProductGallery: FC = () => {
  const { product } = useAppSelector(state => state.product);

  return (
    <div className={styles.productGalleryContainer}>
      <div className={styles.productGalleryMainImageContainer}>
        <motion.img
          {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
          className={cn(styles.productGalleryImage, styles.productGalleryMainImage)}
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className={styles.productGallerySmallImagesContainer}>
        <motion.img
          {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
          className={cn(styles.productGalleryImage, styles.productGallerySmallImage)}
          src={product.images[1]}
          alt={`${product.title}_small_1`}
        />
        <motion.img
          {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
          className={cn(styles.productGalleryImage, styles.productGallerySmallImage)}
          src={product.images[2]}
          alt={`${product.title}_small_2`}
        />
      </div>
    </div>
  );
};
