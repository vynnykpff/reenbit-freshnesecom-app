import { FC } from "react";
import { Product } from "@/common/types";
import { getProductRating } from "@/utils";
import { Rating } from "@/components/UI";
import { ProductCharacteristics } from "@/components/Product/components";
import { ProductCardImage } from "@/components/ProductsList/components";
import { CartOrderNavigation, CartProductCardHeader, CartProductCardPrice } from "./components";
import styles from "./CartProductCard.module.scss";

type Props = {
  selectedUnit: string;
} & Product;

export const CartProductCard: FC<Props> = props => {
  const { images, title, id, reviews, selectedUnit } = props;

  return (
    <li className={styles.productCardListItem}>
      <div className={styles.cartProductCardMediaContainer}>
        <ProductCardImage
          className={["", styles.cartImageWrapper, styles.cartImageWrapper, styles.cartImage]}
          images={images}
          title={title}
        />
        <CartOrderNavigation productId={id} selectedUnit={selectedUnit} />
      </div>

      <div className={styles.cartProductCardContent}>
        <CartProductCardHeader title={title} />
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
        <Rating
          className={[styles.cartRatingContainer, styles.cartRatingFillIcon, styles.cartRatingOutlineIcon]}
          amountRating={getProductRating(reviews)}
        />
        <CartProductCardPrice {...props} />
      </div>
    </li>
  );
};
