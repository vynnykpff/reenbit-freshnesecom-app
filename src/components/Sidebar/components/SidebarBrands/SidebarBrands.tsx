import { animationVariants } from "@/common/constants";
import { Checkbox } from "@/components/UI";
import { useAppSelector } from "@/store";
import commonStyles from "@/styles/Common.module.scss";
import { motion } from "framer-motion";
import { FC, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SidebarBrands.module.scss";

export const SidebarBrands: FC = () => {
  const { products } = useAppSelector(state => state.products);

  const uniqBrands = useMemo(() => {
    return Array.from(new Set(products.map(product => product.brand)));
  }, [products]);

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Brands</h4>
      <motion.ul {...animationVariants} className={styles.sidebarBrandsList}>
        {uniqBrands.map(productBrand => (
          <li key={uuidv4()} className={styles.sidebarBrandsItem}>
            <Checkbox id={uuidv4()} name={productBrand} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
