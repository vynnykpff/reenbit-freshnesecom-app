import { FC, MouseEvent, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { animationBurgerMenu, animationList } from "@/common/constants";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import { RenderCategories } from "../RenderCategories";
import { useChangeEffect, useWindowScrollable } from "@/hooks";
import { useActions, useAppSelector } from "@/store";
import { checkCategory } from "@/utils";
import styles from "./HeaderCategoriesMobile.module.scss";

export const HeaderCategoriesMobile: FC = () => {
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { setBrand, setCategory, resetBrands } = useActions();

  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");

  useWindowScrollable(!isOpenBurgerNav);

  const handleCloseBurgerMenu = () => {
    dispatch(updateHeaderCategories({ isOpenBurgerNav: false }));
  };

  useChangeEffect(() => {
    resetBrands();
    setBrand({ brand: currentProductCategoryWithBrands });

    checkCategory({ currentProductCategoryWithBrands, productsCategoriesWithBrands, setCategory });
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
