import { FC } from "react";
import cn from "classnames";
import { ProductRating } from "@/common/constants";
import RatingIcon from "#/icons/rating-star.svg?react";
import styles from "./Rating.module.scss";

type Props = {
  amountRating: number;
  className?: string[];
};

const START_VALUE = 0;

export const Rating: FC<Props> = ({ amountRating, className = "" }) => {
  const renderRating = () => {
    const ratingIcons = [];
    for (let i = START_VALUE; i < +ProductRating.MAX; i++) {
      ratingIcons.push(
        <li className={styles.ratingListItem} key={i}>
          {i < amountRating ? (
            <RatingIcon className={cn(styles.ratingIcon, styles.ratingIconFill, className[1])} />
          ) : (
            <RatingIcon className={cn(styles.ratingIcon, styles.ratingIconOutline, className[2])} />
          )}
        </li>,
      );
    }

    return ratingIcons;
  };

  return <ul className={cn(styles.ratingContainer, className[0])}>{renderRating()}</ul>;
};
