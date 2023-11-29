import { FC } from "react";
import { useAppSelector } from "@/store";
import { getProductRating } from "@/utils";
import { Rating } from "@/components/UI";
import styles from "./ProductCustomersReviews.module.scss";

const MIN_AMOUNT_REVIEWS = 1;

export const ProductCustomersReviews: FC = () => {
  const {
    product: { reviews },
  } = useAppSelector(state => state.product);

  const getAmountReviews = () => {
    return <>{reviews.length > MIN_AMOUNT_REVIEWS ? <span>customers reviews</span> : <span>customer review</span>}</>;
  };

  return (
    <div className={styles.productCustomersReviewsContainer}>
      <Rating amountRating={getProductRating(reviews)} />
      <span className={styles.productCustomersReviewsContent}>
        ({reviews.length} {getAmountReviews()})
      </span>
    </div>
  );
};
