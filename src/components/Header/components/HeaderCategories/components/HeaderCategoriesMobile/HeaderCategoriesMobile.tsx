import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { checkCategory, removeDataAttribute } from "@/utils";
import { Attributes, animationBurgerMenu, animationList } from "@/common/constants";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import { RenderCategories } from "@/components/Header/components/HeaderCategories/components";

import styles from "./HeaderCategoriesMobile.module.scss";

export const HeaderCategoriesMobile: FC = () => {
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { setBrand, setCategory } = useActions();
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");

  const handleCloseBurgerMenu = () => {
    removeDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE });
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
