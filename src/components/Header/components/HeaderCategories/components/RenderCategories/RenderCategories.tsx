import { ProductCategory, SelectProps } from "@/common/types";
import { Select } from "@/components/UI";
import cn from "classnames";
import { FC } from "react";
import styles from "./RenderCategories.module.scss";

type Props = {
  currentCategory: SelectProps["currentVariant"];
  setCurrentState: SelectProps["setCurrentVariant"];
  productsCategoriesWithBrands: ProductCategory[];
  className?: string[] | string;
};

export const RenderCategories: FC<Props> = ({ className = "", currentCategory, setCurrentState, productsCategoriesWithBrands }) => {
  return (
    <ul className={cn(styles.headerCategoriesList, className[0])}>
      {productsCategoriesWithBrands.map((product: ProductCategory) => (
        <li className={styles.headerCategoriesListItem} key={product.id}>
          <Select
            currentVariant={currentCategory}
            setCurrentVariant={setCurrentState}
            className={cn(styles.selectCategories, className[1])}
            variants={product.brands}
            placeholder={product.title}
          />
        </li>
      ))}
    </ul>
  );
};
