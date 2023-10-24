import { PRODUCT_CATEGORIES_WITH_BRANDS } from "@/common/constants";
import { ProductCategory, SelectProps } from "@/common/types";
import { Select } from "@/components/UI";
import cn from "classnames";
import { FC } from "react";
import styles from "./RenderCategories.module.scss";

type Props = {
  className?: string[] | string;
  currentState: SelectProps["currentState"];
  setCurrentState: SelectProps["setCurrentState"];
};

export const RenderCategories: FC<Props> = ({ className = "", currentState, setCurrentState }) => {
  return (
    <ul className={cn(styles.headerCategoriesList, className[0])}>
      {PRODUCT_CATEGORIES_WITH_BRANDS.map((category: ProductCategory) => (
        <li className={styles.headerCategoriesListItem} key={category.id}>
          <Select
            currentState={currentState}
            setCurrentState={setCurrentState}
            className={cn(styles.selectCategories, className[1])}
            variants={category.brands}
            placeholder={category.title}
          />
        </li>
      ))}
    </ul>
  );
};
