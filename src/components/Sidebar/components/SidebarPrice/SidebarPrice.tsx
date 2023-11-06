import { PriceRange } from "@/components/Sidebar/components/SidebarPrice/components";
import { FC, useState } from "react";
import Slider from "rc-slider";
import { useAppSelector } from "@/store";
import { getMinMaxProductPrice } from "@/utils";
import "rc-slider/assets/index.css";
import { animationVariants } from "@/common/constants";
import { motion } from "framer-motion";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./SidebarPrice.module.scss";

export const SidebarPrice: FC = () => {
  const { products } = useAppSelector(state => state.products);
  const { minPrice, maxPrice } = getMinMaxProductPrice(products);
  const [price, setPrice] = useState({ minPrice, maxPrice });

  const handleChange = (selectedPrices: number | number[]) =>
    setPrice({
      minPrice: Array.isArray(selectedPrices) ? selectedPrices[0] : selectedPrices,
      maxPrice: Array.isArray(selectedPrices) ? selectedPrices[1] : selectedPrices,
    });

  return (
    <div className={commonStyles.sidebarItemContainer}>
      <h4 className={commonStyles.sidebarTitle}>Price</h4>
      <motion.div {...animationVariants}>
        <Slider
          classNames={{ handle: styles.handle, rail: styles.rail, track: styles.track }}
          className={styles["rc-slider"]}
          range
          min={minPrice}
          max={maxPrice}
          defaultValue={[minPrice, maxPrice]}
          onChange={handleChange}
          pushable
        />
        <PriceRange price={price} />
      </motion.div>
    </div>
  );
};
