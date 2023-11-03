import { Routes } from "@/common/constants";
import { useChangeEffect } from "@/hooks";
import { useActions, useAppSelector } from "@/store";
import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RenderCategories } from "../RenderCategories";
import styles from "./HeaderCategoriesDesktop.module.scss";

export const HeaderCategoriesDesktop: FC = () => {
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");
  const { setBrand, setCategory } = useActions();

  const location = useLocation();
  const navigate = useNavigate();

  useChangeEffect(() => {
    setBrand(currentProductCategoryWithBrands);
    checkCategory();

    if (location.pathname !== (Routes.PRODUCTS as string)) {
      navigate(Routes.PRODUCTS);
    }
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
