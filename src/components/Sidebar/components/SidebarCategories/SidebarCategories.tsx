import { animationVariants } from "@/common/constants";
import { Button, ItemCounter } from "@/components/UI";
import { useAppSelector } from "@/store";
import { FC } from "react";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./SidebarCategories.module.scss";
import { motion } from "framer-motion";

export const SidebarCategories: FC = () => {
  const { products, productsCategoriesWithBrands } = useAppSelector(state => state.products);

  const getUniqCategories = (category: string) => {
    return products.filter(item => item.category === category).length;
  };

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Categories</h4>
      <motion.ul {...animationVariants} className={styles.sidebarCategoriesList}>
        {productsCategoriesWithBrands.map(productCategory => (
          <li key={productCategory.id} className={styles.sidebarCategoriesItem}>
            <Button className={styles.sidebarCategoriesItemTitle}>{productCategory.title}</Button>
            <ItemCounter className={[styles.sidebarCategoriesItemCounter]} count={getUniqCategories(productCategory.title)} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
