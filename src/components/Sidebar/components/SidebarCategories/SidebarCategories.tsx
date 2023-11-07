import cn from "classnames";
import { FC, useState } from "react";
import { animationVariants } from "@/common/constants";
import { FiltersProps } from "@/common/types";
import { Button, ItemCounter } from "@/components/UI";
import { useAppSelector } from "@/store";
import commonStyles from "@/styles/Common.module.scss";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import styles from "./SidebarCategories.module.scss";

const ALL_CATEGORIES = "All Categories";

export const SidebarCategories: FC<FiltersProps> = ({ setIsShowFilters }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { products, productsCategories } = useAppSelector(state => state.products);

  const getUniqCategories = (category: string) => {
    if (category === ALL_CATEGORIES) {
      return products.length;
    }

    return products.filter(item => item.category === category).length;
  };

  const handleShowFiltersMenu = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }

    if (setIsShowFilters) {
      setIsShowFilters(false);
    }
  };

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Categories</h4>
      <motion.ul {...animationVariants} className={styles.sidebarCategoriesList}>
        {Object.values(productsCategories).map(category => (
          <li key={uuidv4()} onClick={() => handleShowFiltersMenu(category)} className={styles.sidebarCategoriesItem}>
            <Button className={cn(styles.sidebarCategoriesItemTitle, activeCategory === category && styles.sidebarCategoryItemTitleActive)}>
              {category}
            </Button>
            <ItemCounter className={[styles.sidebarCategoriesItemCounter]} count={getUniqCategories(category)} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
