import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useActions, useAppSelector } from "@/store";
import { getSlugString, getTitleBrand } from "@/utils";
import { Checkbox } from "@/components/UI";
import { PRODUCTS_PRICE_DEFAULT, ProductDefaultValue, ProductFilterType, animationVariants } from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./SidebarBrands.module.scss";

export const SidebarBrands: FC = () => {
  const { products, productsCategoriesWithBrands } = useAppSelector(state => state.products);
  const { productCategory, productBrands } = useAppSelector(state => state.productsFilter);

  const [currentProductCategoryBrands, setCurrentProductCategoryBrands] = useState<string[]>([]);
  const { setBrand, removeBrand, setPrice } = useActions();

  const handleSetProductBrand = (selectedProductBrand: string) => {
    const slugBrand = getSlugString(selectedProductBrand);
    productsCategoriesWithBrands.forEach(category => {
      const defaultBrand = getTitleBrand(slugBrand, category.id);

      Object.values(category.brands).forEach(brand => {
        if (productBrands.some(brand => brand === defaultBrand)) {
          setPrice(PRODUCTS_PRICE_DEFAULT);
          return removeBrand(defaultBrand);
        }

        if (brand === selectedProductBrand) {
          setPrice(PRODUCTS_PRICE_DEFAULT);
          setBrand(defaultBrand);
        }
      });
    });
  };

  const getCategoryBrands = () => {
    if (productCategory === (ProductFilterType.ALL_CATEGORIES as string)) {
      const uniqBrands = Array.from(new Set(products.map(({ brand }) => brand)));
      return setCurrentProductCategoryBrands(uniqBrands);
    }

    const selectedCategory = productsCategoriesWithBrands.find(({ id }) => id === productCategory);

    if (!selectedCategory) {
      return;
    }

    const brands = Object.values(selectedCategory.brands)
      .flat()
      .filter(item => item !== (ProductDefaultValue.BRANDS as string));

    setCurrentProductCategoryBrands(brands);
  };

  useEffect(() => {
    getCategoryBrands();
  }, [productCategory]);

  const handleIsChecked = (brand: string): boolean => {
    return !!productBrands.filter(item => item.includes(getSlugString(brand))).length;
  };

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Brands</h4>
      <motion.ul {...animationVariants} className={styles.sidebarBrandsList}>
        {currentProductCategoryBrands.map(productBrand => (
          <li key={uuidv4()} className={styles.sidebarBrandsItem} onClick={() => handleSetProductBrand(productBrand)}>
            <Checkbox id={uuidv4()} name={productBrand} isChecked={handleIsChecked(productBrand)} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
