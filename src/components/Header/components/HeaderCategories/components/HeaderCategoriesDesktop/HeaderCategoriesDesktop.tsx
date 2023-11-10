import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { checkCategory } from "@/utils";
import { RenderCategories } from "../RenderCategories";
import { Routes } from "@/common/constants";
import styles from "./HeaderCategoriesDesktop.module.scss";

export const HeaderCategoriesDesktop: FC = () => {
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { setBrand, setCategory, resetBrands } = useActions();

  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useChangeEffect(() => {
    resetBrands();
    setBrand({ brand: currentProductCategoryWithBrands });

    checkCategory({ currentProductCategoryWithBrands, productsCategoriesWithBrands, setCategory });

    if (location.pathname !== (Routes.PRODUCTS as string)) {
      navigate(Routes.PRODUCTS);
    }
  }, [currentProductCategoryWithBrands]);

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
