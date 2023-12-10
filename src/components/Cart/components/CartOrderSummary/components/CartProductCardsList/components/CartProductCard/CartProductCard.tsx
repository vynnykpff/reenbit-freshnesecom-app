import { FC } from "react";
import { motion } from "framer-motion";
import { Product } from "@/common/types";
import { getAnimationVariant } from "@/utils";
import { Rating } from "@/components/UI";
import { ProductCharacteristics } from "@/components/Product/components";
import { ProductCardImage } from "@/components/ProductsList/components";
import { CartProductCardHeader, CartProductCardNavigation, CartProductCardPrice } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./CartProductCard.module.scss";

export const CartProductCard: FC<Product> = props => {
  const { images, title, id } = props;

  return (
    <motion.li
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.productCardListItem}
    >
      <div className={styles.cartProductCardMediaContainer}>
        <ProductCardImage
          className={["", styles.cartImageWrapper, styles.cartImageWrapper, styles.cartImage]}
          images={images}
          title={title}
        />
        <CartProductCardNavigation productId={id} />
      </div>

      <div className={styles.cartProductCardContent}>
        <CartProductCardHeader />
        <ProductCharacteristics
          className={[
            styles.cartCharacteristicsList,
            styles.cartCharacteristicsItem,
            styles.cartCharacteristicsKey,
            styles.cartCharacteristicsProperty,
          ]}
          productCharacteristicsList={["Brand", "Delivery"]}
          {...props}
        />
        <Rating className={[styles.cartRatingContainer, styles.cartRatingFillIcon, styles.cartRatingOutlineIcon]} amountRating={4} />
        <CartProductCardPrice {...props} />
      </div>
    </motion.li>
  );
};
