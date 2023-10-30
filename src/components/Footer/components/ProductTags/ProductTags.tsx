import { Product } from "@/common/types";
import { useAppSelector } from "@/store";
import cn from "classnames";
import { FC } from "react";
import styles from "./ProductTags.module.scss";
import commonStyles from "@/styles/Common.module.scss";

const MAX_AMOUNT_OF_PRODUCTS_TAGS = 10;

export const ProductTags: FC = () => {
  const { products } = useAppSelector(state => state.products);
  const limitedProducts = products.slice(0, MAX_AMOUNT_OF_PRODUCTS_TAGS);

  return (
    <div className={styles.productTagsContainer}>
      <h3 className={cn(commonStyles.titleCategory, styles.productTagsTitle)}>Product tags</h3>
      <ul className={styles.productTagsList}>
        {limitedProducts.map((tag: Product) => (
          <li className={styles.productTagsListItem} key={tag.id}>
            {tag.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
