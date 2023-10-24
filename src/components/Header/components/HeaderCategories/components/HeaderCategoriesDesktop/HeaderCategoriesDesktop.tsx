import { PRODUCT_CATEGORIES_WITH_BRANDS } from "@/common/constants";
import { FC, useState } from "react";
import { RenderCategories } from "../RenderCategories";
import styles from "./HeaderCategoriesDesktop.module.scss";

export const HeaderCategoriesDesktop: FC = () => {
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState(
    PRODUCT_CATEGORIES_WITH_BRANDS[0].brands[0].text,
  );

  return (
    <section className={styles.headerCategoriesContainer}>
      <RenderCategories
        className={[styles.headerCategoriesDesktopList, styles.selectCategories]}
        currentState={currentProductCategoryWithBrands}
        setCurrentState={setCurrentProductCategoryWithBrands}
      />
    </section>
  );
};
