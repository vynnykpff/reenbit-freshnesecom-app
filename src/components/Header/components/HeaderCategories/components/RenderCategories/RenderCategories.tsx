import { ProductCategory, SelectProps } from "@/common/types";
import { Select } from "@/components/UI";
import cn from "classnames";
import { FC } from "react";
import styles from "./RenderCategories.module.scss";

type Props = {
  currentCategory: SelectProps["currentState"];
  setCurrentState: SelectProps["setCurrentState"];
  productsCategoriesWithBrands: ProductCategory[];
  className?: string[] | string;
};

export const RenderCategories: FC<Props> = ({ className = "", currentCategory, setCurrentState, productsCategoriesWithBrands }) => {
  return (
    <ul className={cn(styles.headerCategoriesList, className[0])}>
      {productsCategoriesWithBrands.map((product: ProductCategory) => (
        <li className={styles.headerCategoriesListItem} key={product.id}>
          <Select
            currentState={currentCategory}
            setCurrentState={setCurrentState}
            className={cn(styles.selectCategories, className[1])}
            variants={product.brand}
            placeholder={product.title}
          />
        </li>
      ))}
    </ul>
  );
};
