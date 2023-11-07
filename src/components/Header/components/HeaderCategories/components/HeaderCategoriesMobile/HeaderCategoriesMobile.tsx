import { animationBurgerMenu, animationList } from "@/common/constants";
import { RenderCategories } from "@/components/Header/components/HeaderCategories/components";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import { useWindowScrollable } from "@/hooks";
import { useActions, useAppSelector } from "@/store";
import { checkCategory } from "@/utils";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, MouseEvent, useContext, useEffect, useState } from "react";

import styles from "./HeaderCategoriesMobile.module.scss";

export const HeaderCategoriesMobile: FC = () => {
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { setBrand, setCategory } = useActions();
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");

  useWindowScrollable(!isOpenBurgerNav);

  const handleCloseBurgerMenu = () => {
    dispatch(updateHeaderCategories({ isOpenBurgerNav: false }));
  };

  useEffect(() => {
    setBrand(currentProductCategoryWithBrands);
    checkCategory({ currentProductCategoryWithBrands, productsCategoriesWithBrands, setCategory });
    handleCloseBurgerMenu();
  }, [currentProductCategoryWithBrands]);

  return (
    <AnimatePresence>
      {isOpenBurgerNav && (
        <motion.section
          {...animationList}
          onClick={handleCloseBurgerMenu}
          className={cn(styles.headerCategoriesMobileContainer, isOpenBurgerNav && styles.headerCategoriesMobileContainerActive)}
        >
          <motion.div
            {...animationBurgerMenu}
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className={styles.headerCategoriesMobileContent}
          >
            <RenderCategories
              currentCategory={currentProductCategoryWithBrands}
              setCurrentState={setCurrentProductCategoryWithBrands}
              productsCategoriesWithBrands={productsCategoriesWithBrands}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
