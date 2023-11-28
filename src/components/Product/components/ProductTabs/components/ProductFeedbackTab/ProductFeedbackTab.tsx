import { FC } from "react";
import { motion } from "framer-motion";
import { Product } from "@/common/types";
import { NoMatches } from "@/components/UI";
import { AnimationDefaultDuration, ProductTabsVariants, animationDefaultVariants } from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";
import { getAnimationVariant } from "@/utils";
import { ProductFeedback } from "./components";

type Props = {
  selectedTab: ProductTabsVariants;
} & Product;

export const ProductFeedbackTab: FC<Props> = ({ selectedTab, ...props }) => {
  const feedbackData = selectedTab === ProductTabsVariants.REVIEWS ? props.reviews : props.questions;
  const isRating = selectedTab === ProductTabsVariants.REVIEWS;

  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
      className={commonStyles.productTabsContentContainer}
    >
      {feedbackData.length ? (
        feedbackData.map(credentials => <ProductFeedback key={credentials.id} isRating={isRating} {...credentials} />)
      ) : (
        <NoMatches />
      )}
    </motion.ul>
  );
};
