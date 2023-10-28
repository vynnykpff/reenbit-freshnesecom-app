import { ProductCategory } from "@/common/types";
import { Select } from "@/components/UI";
import { useAppSelector } from "@/store";
import cn from "classnames";
import { FC, useState } from "react";
import styles from "./RenderCategories.module.scss";

type Props = {
  className?: string[] | string;
};

export const RenderCategories: FC<Props> = ({ className = "" }) => {
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const [currentProductCategoryWithBrands, setCurrentProductCategoryWithBrands] = useState(productsCategoriesWithBrands[0]?.brands[0].text);

  return (
    <ul className={cn(styles.headerCategoriesList, className[0])}>
      {productsCategoriesWithBrands.map((product: ProductCategory) => (
        <li className={styles.headerCategoriesListItem} key={product.id}>
          <Select
            currentState={currentProductCategoryWithBrands}
            setCurrentState={setCurrentProductCategoryWithBrands}
            className={cn(styles.selectCategories, className[1])}
            variants={product.brands}
            placeholder={product.title}
          />
        </li>
      ))}
    </ul>
  );
};
