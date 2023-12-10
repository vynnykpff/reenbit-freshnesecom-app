import { FC } from "react";
import cn from "classnames";
import NoMatchesIcon from "#/icons/no-results.svg?react";
import styles from "./NoMatches.module.scss";

type Props = {
  className?: string | string[];
  title?: string;
};

const DEFAULT_TITLE = "Nothing was found";

export const NoMatches: FC<Props> = ({ className = "", title = DEFAULT_TITLE }) => {
  return (
    <div className={cn(styles.noMatchesContainer, className[0])}>
      <NoMatchesIcon className={cn(styles.noMatchesImage, className[1])} />
      <p className={cn(styles.noMatchesTitle, className[2])}>{title}</p>
    </div>
  );
};
