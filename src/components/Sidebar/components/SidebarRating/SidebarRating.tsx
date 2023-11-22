import { FC } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useActions, useAppSelector } from "@/store";
import { animationVariants } from "@/common/constants";
import { Checkbox, Rating } from "@/components/UI";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./SidebarRating.module.scss";

const START_VALUE = 5;
const MIN_AMOUNT_STARS = 1;

export const SidebarRating: FC = () => {
  const { productRatings } = useAppSelector(state => state.productsFilter);
  const { setRating } = useActions();

  const handleClickRating = (count: number) => {
    setRating(count);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIsChecked = (rating: number): boolean => {
    return !!productRatings.filter(item => item === rating).length;
  };

  const renderRating = () => {
    const ratingIcons = [];

    for (let i = START_VALUE; i >= MIN_AMOUNT_STARS; i--) {
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
      <motion.ul {...animationVariants} className={styles.sidebarRatingList}>
        {renderRating()}
      </motion.ul>
    </div>
  );
};
