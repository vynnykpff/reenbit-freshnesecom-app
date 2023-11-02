import { useActions, useAppSelector } from "@/store";
import { FC, useEffect, useState } from "react";
import { RenderCategories } from "../RenderCategories";
import styles from "./HeaderCategoriesDesktop.module.scss";

export const HeaderCategoriesDesktop: FC = () => {
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");
  const { setBrand, setCategory } = useActions();

  useEffect(() => {
    setBrand(currentProductCategoryWithBrands);
    checkCategory();
  }, [currentProductCategoryWithBrands]);

  const checkCategory = () => {
    if (!currentProductCategoryWithBrands) {
      return;
    }

    for (const item of productsCategoriesWithBrands) {
      if (currentProductCategoryWithBrands.includes(item.id)) {
        setCategory(item.id);
      }
    }
  };

  return (
    <section className={styles.headerCategoriesContainer}>
      <RenderCategories
        productsCategoriesWithBrands={productsCategoriesWithBrands}
        currentCategory={currentProductCategoryWithBrands}
        setCurrentState={setCurrentProductCategoryWithBrands}
        className={[styles.headerCategoriesDesktopList, styles.selectCategories]}
      />
    </section>
  );
};
