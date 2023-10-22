import { PRODUCT_CATEGORIES_WITH_BRANDS } from "@/common/constants";
import { ProductCategory } from "@/common/types";
import { Select } from "@/components/UI";
import { FC, useState } from "react";
import styles from "./HeaderCategories.module.scss";

export const HeaderCategories: FC = () => {
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState(
    PRODUCT_CATEGORIES_WITH_BRANDS[0].brands[0].text,
  );

  return (
    <section className={styles.headerCategoriesContainer}>
      <ul className={styles.headerCategoriesList}>
        {PRODUCT_CATEGORIES_WITH_BRANDS.map((category: ProductCategory) => (
          <li className={styles.headerCategoriesListItem} key={category.id}>
            <Select
              currentState={currentProductCategoryWithBrands}
              setCurrentState={setCurrentProductCategoryWithBrands}
              className={styles.selectCategories}
              variants={category.brands}
              placeholder={category.title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
