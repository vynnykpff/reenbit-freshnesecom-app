import { FC, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Slider from "rc-slider";
import cn from "classnames";
import { motion } from "framer-motion";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect, useFilteredProducts } from "@/hooks";
import { getMinMaxProductPrice, getMinMaxSelectedPrice } from "@/utils";
import { ProductSelectedPrice } from "@/common/types";
import { GlobalDelay, ProductFilterType, animationVariants } from "@/common/constants";
import { PriceRange } from "./components";
import commonStyles from "@/styles/Common.module.scss";
import "rc-slider/assets/index.css";
import styles from "./SidebarPrice.module.scss";

export const SidebarPrice: FC = () => {
  const { products } = useAppSelector(state => state.products);
  const { productCategory, productRatings, productBrands } = useAppSelector(state => state.productsFilter);
  const { setPrice, resetRating, resetPrice } = useActions();

  const filteredProducts = useFilteredProducts();
  const [localPrice, setLocalPrice] = useState(getMinMaxProductPrice(filteredProducts));
  const [sliderValue, setSliderValue] = useState<[number, number]>([localPrice.minPrice, localPrice.maxPrice]);

  useEffect(() => {
    const prices = getMinMaxProductPrice(filteredProducts);
    setLocalPrice(prices);
    setSliderValue([prices.minPrice, prices.maxPrice]);
  }, [productCategory, productBrands, productRatings]);

  useEffect(() => {
    const currentFilteredProducts = productCategory === (ProductFilterType.ALL_CATEGORIES as string) ? products : filteredProducts;
    const prices = getMinMaxProductPrice(currentFilteredProducts);
    setPrice([prices.minPrice, prices.maxPrice]);

    if (productRatings.length) {
      resetRating();
    }
  }, [productCategory]);

  useChangeEffect(() => {
    if (!productRatings.length) {
      resetPrice();
    }
  }, [productRatings]);

  const handleAfterPriceChange = useDebouncedCallback((selectedPrices: ProductSelectedPrice) => {
    const currentSelectedPrices = getMinMaxSelectedPrice(selectedPrices);
    setPrice([currentSelectedPrices.minPrice, currentSelectedPrices.maxPrice]);
  }, GlobalDelay.DEFAULT);

  const handlePriceChange = (selectedPrices: ProductSelectedPrice) => {
    const { minPrice, maxPrice } = getMinMaxSelectedPrice(selectedPrices);
    setSliderValue([minPrice, maxPrice]);
  };

  return (
    <div className={cn(commonStyles.sidebarItemContainer, styles.sidebarPriceContainer)}>
      <h4 className={commonStyles.sidebarTitle}>Price</h4>
      <motion.div {...animationVariants}>
        <Slider
          classNames={{ handle: styles.handle, rail: styles.rail, track: styles.track }}
          className={styles["rc-slider"]}
          range
          min={localPrice.minPrice}
          max={localPrice.maxPrice}
          value={sliderValue}
          onChange={handlePriceChange}
          onAfterChange={handleAfterPriceChange}
          pushable
        />
        <PriceRange setSliderValue={setSliderValue} price={sliderValue} defaultPrice={[localPrice.minPrice, localPrice.maxPrice]} />
      </motion.div>
    </div>
  );
};
