import { ProductRating } from "@/common/constants";
import { ProductReview } from "@/common/types";

export const getProductRating = (productReviewsRatings: ProductReview[]) => {
  if (!productReviewsRatings.length) {
    return ProductRating.MIN;
  }

  const totalRating = productReviewsRatings.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = totalRating / productReviewsRatings.length;

  return Math.floor(Math.max(ProductRating.MIN, Math.min(ProductRating.MAX, averageRating)));
};
