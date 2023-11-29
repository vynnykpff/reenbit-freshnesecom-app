import { FC, MouseEvent, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts";
import { useChangeEffect, useWindowScrollable } from "@/hooks";
import { checkCategory, getAnimationVariant } from "@/utils";
import { RenderCategories } from "../RenderCategories";
import { AnimationDefaultDuration, Routes, animationBurgerMenu, animationDefaultList } from "@/common/constants";
import styles from "./HeaderCategoriesMobile.module.scss";

export const HeaderCategoriesMobile: FC = () => {
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { setBrand, setCategory, resetBrands } = useActions();

  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useWindowScrollable(!isOpenBurgerNav);

  const handleCloseBurgerMenu = () => {
    dispatch(updateHeaderCategories({ isOpenBurgerNav: false }));
  };

  useChangeEffect(() => {
    resetBrands();
    setBrand(currentProductCategoryWithBrands);

    checkCategory({ currentProductCategoryWithBrands, productsCategoriesWithBrands, setCategory });

    if (location.pathname !== (Routes.PRODUCTS as string)) {
      navigate(Routes.PRODUCTS);
    }
  }, [currentProductCategoryWithBrands]);

  return (
    <AnimatePresence>
      {isOpenBurgerNav && (
        <motion.section
          {...getAnimationVariant({ ...animationDefaultList, duration: AnimationDefaultDuration.DEFAULT })}
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
