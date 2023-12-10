import { FC } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { getAnimationVariant } from "@/utils";
import { Rating } from "@/components/UI";
import { ProductCharacteristics } from "@/components/Product/components";
import { ProductCardImage } from "@/components/ProductsList/components";
import { CartProductCardHeader, CartProductCardNavigation, CartProductCardPrice } from "./components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./CartProductCard.module.scss";

export const CartProductCard: FC = () => {
  const { products } = useAppSelector(state => state.products);

  return (
    <motion.li
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}
      className={styles.productCardListItem}
    >
      <div className={styles.cartProductCardMediaContainer}>
        <ProductCardImage
          className={["", styles.cartImageWrapper, styles.cartImageWrapper, styles.cartImage]}
          images={products[0].images}
          title={products[0].title}
        />
        <CartProductCardNavigation />
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
          {...products[0]}
        />
        <Rating className={[styles.cartRatingContainer, styles.cartRatingFillIcon, styles.cartRatingOutlineIcon]} amountRating={4} />
        <CartProductCardPrice {...products[0]} />
      </div>
    </motion.li>
  );
};
