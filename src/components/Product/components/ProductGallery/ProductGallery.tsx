import { FC, useState } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { getAnimationVariant } from "@/utils";
import { Product } from "@/common/types";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductGallery.module.scss";

type Props = {
  title: Product["title"];
  images: Product["images"];
};

export const ProductGallery: FC<Props> = ({ title, images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const filteredImages = images.filter(image => image !== activeImage);

  const handleImageClick = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className={styles.productGalleryContainer}>
      <div className={styles.productGalleryMainImageContainer}>
        <motion.img
          {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
          className={cn(styles.productGalleryImage, styles.productGalleryMainImage)}
          src={activeImage}
          alt={title}
        />
      </div>

      <div className={styles.productGallerySmallImagesContainer}>
        {filteredImages.map((image, index) => (
          <motion.img
            key={index}
            onClick={() => handleImageClick(image)}
            {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
            className={cn(styles.productGalleryImage, styles.productGallerySmallImage)}
            src={image}
            alt={`${title}_small_${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
