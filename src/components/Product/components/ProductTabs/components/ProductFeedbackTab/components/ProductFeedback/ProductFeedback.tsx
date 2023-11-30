import { FC } from "react";
import { ProductReview } from "@/common/types";
import { Rating } from "@/components/UI";
import styles from "./ProductFeedback.module.scss";

type Props = {
  isRating: boolean;
} & ProductReview;

export const ProductFeedback: FC<Props> = ({ rating, content, createdDate, userData: { name, image }, isRating = true }) => {
  return (
    <li className={styles.productFeedbackContainer}>
      <img className={styles.productFeedbackImage} src={image} alt={`${name}_review`} />
      <div className={styles.productFeedbackContentContainer}>
        <div className={styles.productFeedbackUserCredentials}>
          <h4 className={styles.productFeedbackUserName}>{name}</h4>
          <span className={styles.productFeedbackTimestamp}>{createdDate}</span>
        </div>
        {isRating && <Rating className={["", styles.productFeedbackRating, styles.productFeedbackRating]} amountRating={rating} />}
        <p className={styles.productFeedbackContent}>{content}</p>
      </div>
    </li>
  );
};
