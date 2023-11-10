import { FC, MutableRefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store";
import { useFilteredProducts, useOutsideClick } from "@/hooks";
import { SearchDropListItem } from "./components";
import { animationVariants } from "@/common/constants";
import styles from "./SearchDropList.module.scss";

type Props = {
  searchRef: MutableRefObject<HTMLDivElement | null>;
};

export const SearchDropList: FC<Props> = ({ searchRef }) => {
  const { searchValue } = useAppSelector(state => state.productsFilter);
  const [isVisible, setIsVisible] = useState(!!searchValue);

  const filteredProducts = useFilteredProducts();
  const containerRef = useOutsideClick(
    () => {
      setIsVisible(false);
      filteredProducts.splice(0, 0);
    },
    "mousedown",
    searchRef,
  );

  useEffect(() => {
    setIsVisible(!!searchValue);
  }, [searchValue]);

  if (!searchValue || !isVisible) {
    return null;
  }

  return (
    <motion.section ref={containerRef} {...animationVariants} className={styles.searchDropListContainer}>
      <div className={styles.searchDropListHeader}>
        <span className={styles.searchDropListHeaderItem}>Product</span>
        <span className={styles.searchDropListHeaderItem}>Category</span>
      </div>
      <ul>
        {filteredProducts.length ? (
          filteredProducts.map(product => (
            <SearchDropListItem
              setIsVisible={setIsVisible}
              key={product.id}
              searchImage={product.images[0]}
              productTitle={product.title}
              productCategory={product.category}
            />
          ))
        ) : (
          <li className={styles.searchDropListNoMatches}>Nothing was found</li>
        )}
      </ul>
    </motion.section>
  );
};
