import cn from "classnames";
import { FC } from "react";
import RatingIcon from "#/icons/rating-star.svg?react";
import styles from "./Rating.module.scss";

type Props = {
  amountRating: number;
  className?: string[];
};

const MAX_AMOUNT_STARS = 5;
const START_VALUE = 0;

export const Rating: FC<Props> = ({ amountRating, className = "" }) => {
  const renderRating = () => {
    const ratingIcons = [];
    for (let i = START_VALUE; i < MAX_AMOUNT_STARS; i++) {
      ratingIcons.push(
        <span key={i}>
          {i < amountRating ? (
            <RatingIcon className={cn(styles.ratingIcon, styles.ratingIconFill, className[1])} />
          ) : (
            <RatingIcon className={cn(styles.ratingIcon, styles.ratingIconOutline)} />
          )}
        </span>,
      );
    }

    return ratingIcons;
  };

  return <div className={cn(styles.ratingContainer, className[0])}>{renderRating()}</div>;
};
