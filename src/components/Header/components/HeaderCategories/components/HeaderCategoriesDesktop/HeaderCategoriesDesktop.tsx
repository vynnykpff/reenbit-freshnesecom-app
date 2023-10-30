import { useAppSelector } from "@/store";
import { FC, useState } from "react";
import { RenderCategories } from "../RenderCategories";
import styles from "./HeaderCategoriesDesktop.module.scss";

export const HeaderCategoriesDesktop: FC = () => {
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState(productsCategoriesWithBrands[0]?.brand[0]?.text);

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
