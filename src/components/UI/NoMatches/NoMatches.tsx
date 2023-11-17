import { FC } from "react";
import NoMatchesIcon from "#/icons/no-results.svg?react";
import styles from "./NoMatches.module.scss";

export const NoMatches: FC = () => {
  return (
    <div className={styles.noMatchesContainer}>
      <NoMatchesIcon className={styles.noMatchesImage} />
      <p className={styles.noMatchesTitle}>Nothing was found</p>
    </div>
  );
};
