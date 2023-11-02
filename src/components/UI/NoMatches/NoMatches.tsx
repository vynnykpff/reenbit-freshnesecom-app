import { FC } from "react";
import NoMatchesIcon from "#/icons/no-results.svg?react";
import styles from "./NoMatches.module.scss";

export const NoMatches: FC<{ message: string }> = ({ message }) => {
  return (
    <div className={styles.noMatchesContainer}>
      <NoMatchesIcon className={styles.noMatchesImage} />
      <p className={styles.noMatchesTitle}>
        Nothing was found for the query: <span className={styles.noMatchesAccentMessage}>{message}</span>
      </p>
    </div>
  );
};
