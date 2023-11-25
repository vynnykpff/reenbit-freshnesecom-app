import { FC } from "react";
import { Rating } from "@/components/UI";
import styles from "./ProductCustomersReviews.module.scss";

export const ProductCustomersReviews: FC = () => {
  return (
    <div className={styles.productCustomersReviewsContainer}>
      <Rating amountRating={4} />
      <span className={styles.productCustomersReviewsContent}>(1 customer review)</span>
    </div>
  );
};
