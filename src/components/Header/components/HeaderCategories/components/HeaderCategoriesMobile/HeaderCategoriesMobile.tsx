import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { removeDataAttribute } from "@/utils";
import { Attributes, PRODUCT_CATEGORIES_WITH_BRANDS } from "@/common/constants";
import { RenderCategories } from "../RenderCategories";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import styles from "./HeaderCategoriesMobile.module.scss";

export const HeaderCategoriesMobile: FC = () => {
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState(
    PRODUCT_CATEGORIES_WITH_BRANDS[0].brands[0].text,
  );

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
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
          onClick={handleCloseBurgerMenu}
          className={cn(styles.headerCategoriesMobileContainer, isOpenBurgerNav && styles.headerCategoriesMobileContainerActive)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className={styles.headerCategoriesMobileContent}
          >
            <RenderCategories currentState={currentProductCategoryWithBrands} setCurrentState={setCurrentProductCategoryWithBrands} />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
