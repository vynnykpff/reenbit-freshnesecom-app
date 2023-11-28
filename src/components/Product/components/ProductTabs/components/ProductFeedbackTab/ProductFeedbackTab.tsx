import { FC } from "react";
import { Product } from "@/common/types";
import { ProductFeedback } from "./components";
import commonStyles from "@/styles/Common.module.scss";

export const ProductFeedbackTab: FC<Product> = props => {
  return (
    <ul className={commonStyles.productTabsContentContainer}>
      {props.reviews.map(credentials => (
        <ProductFeedback key={credentials.id} isRating={false} {...credentials} />
      ))}
    </ul>
  );
};
