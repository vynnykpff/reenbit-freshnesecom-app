import cn from "classnames";
import { FC } from "react";
import styles from "./ProductTags.module.scss";
import commonStyles from "@/styles/Common.module.scss";

const numTags = 10;

export const tags = Array.from({ length: numTags }, (_, index) => `#tag-${index + 1}`);
export const ProductTags: FC = () => {
  return (
    <div className={styles.productTagsContainer}>
      <h3 className={cn(commonStyles.titleCategory, styles.productTagsTitle)}>Product tags</h3>
      <ul className={styles.productTagsList}>
        {tags.map((tag, index) => (
          <li className={styles.productTagsListItem} key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
