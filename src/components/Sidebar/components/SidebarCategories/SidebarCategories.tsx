import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getAnimationVariant, getSlugString } from "@/utils";
import { FiltersProps } from "@/common/types";
import { ProductInfoNotification } from "@/components/UI";
import {
  AnimationDefaultDuration,
  DEFAULT_CATEGORY,
  ProductDefaultValue,
  ProductFilterType,
  animationDefaultVariants,
} from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./SidebarCategories.module.scss";

export const SidebarCategories: FC<FiltersProps> = () => {
  const { products, productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { productCategory, productBrands } = useAppSelector(state => state.productsFilter);
  const { setCategory, setBrand, resetBrands } = useActions();
  const [localProductsCategories, setLocalProductsCategories] = useState(productsCategoriesWithBrands);

  useEffect(() => {
    setLocalProductsCategories(prev => [DEFAULT_CATEGORY, ...prev]);
  }, []);

  const handleResetBrands = () => {
    const currentCategoryBrands = productsCategoriesWithBrands.find(o => o.id === productCategory);

    if (!currentCategoryBrands) {
      resetBrands();
      return;
    }

    const categoryBrands = Object.keys(currentCategoryBrands.brands);
    const selectedBrands = productBrands.map(brand => brand);

    const selectedBrandsInCurrentCategory = selectedBrands.filter(
      brand => brand !== (ProductFilterType.ALL_BRANDS as string) && categoryBrands.includes(brand),
    );

    resetBrands();
    selectedBrandsInCurrentCategory.map(brand => setBrand(brand));
  };

  useChangeEffect(() => {
    handleResetBrands();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productCategory]);

  const getUniqCategories = (category: string) => {
    if (category === (ProductDefaultValue.CATEGORIES as string)) {
      return products.length;
    }

    return products.filter(item => item.category === category).length;
  };

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Categories</h4>
      <motion.ul
        {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
        className={styles.sidebarCategoriesList}
      >
        {localProductsCategories.map(category => (
          <li key={uuidv4()} onClick={() => setCategory(getSlugString(category.title))} className={styles.sidebarCategoriesItem}>
            <span
              className={cn(
                styles.sidebarCategoriesItemTitle,
                productCategory === getSlugString(category.title) && styles.sidebarCategoryItemTitleActive,
              )}
            >
              {category.title}
            </span>
            <ProductInfoNotification className={[styles.sidebarCategoriesItemCounter]} count={`${getUniqCategories(category.title)}`} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
