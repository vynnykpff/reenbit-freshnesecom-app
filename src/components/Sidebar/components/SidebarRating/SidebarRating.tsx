import { AnimationDefaultDuration, ProductRating, animationDefaultVariants } from "@/common/constants";
import { Checkbox, Rating } from "@/components/UI";
import { useActions, useAppSelector } from "@/store";
import commonStyles from "@/styles/Common.module.scss";
import { getAnimationVariant } from "@/utils";
import { motion } from "framer-motion";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SidebarRating.module.scss";

export const SidebarRating: FC = () => {
  const { productRatings } = useAppSelector(state => state.productsFilter);
  const { setRating } = useActions();

  const handleClickRating = (count: number) => {
    setRating(count);
  };

  const handleIsChecked = (rating: number): boolean => {
    return !!productRatings.filter(item => item === rating).length;
  };

  const renderRating = () => {
    const ratingIcons = [];

    for (let i = ProductRating.MAX; i >= ProductRating.MIN; i--) {
      ratingIcons.push(
        <li key={uuidv4()} className={styles.sidebarRatingItem} onClick={() => handleClickRating(i)}>
          <Checkbox
            isChecked={handleIsChecked(i)}
            id={uuidv4()}
            name={<Rating amountRating={i} className={[styles.ratingList, styles.sidebarRatingIcon, styles.sidebarOutlineRatingIcon]} />}
          />
        </li>,
      );
    }
    return ratingIcons;
  };

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Rating</h4>
      <motion.ul
        {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
        className={styles.sidebarRatingList}
      >
        {renderRating()}
      </motion.ul>
    </div>
  );
};
