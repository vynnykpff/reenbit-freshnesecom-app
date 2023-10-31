import { RenderCategories } from "@/components/Header/components/HeaderCategories/components";
import { useAppSelector } from "@/store";
import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { removeDataAttribute } from "@/utils";
import { Attributes, animationBurgerMenu, animationList } from "@/common/constants";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import styles from "./HeaderCategoriesMobile.module.scss";

export const HeaderCategoriesMobile: FC = () => {
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState(productsCategoriesWithBrands[0]?.brand[0].text);

  useEffect(() => {
    handleCloseBurgerMenu();
  }, [currentProductCategoryWithBrands]);

  const handleCloseBurgerMenu = () => {
    removeDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE });
    dispatch(updateHeaderCategories({ isOpenBurgerNav: false }));
  };

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
