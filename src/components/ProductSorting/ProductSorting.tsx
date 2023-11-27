import { FC, useState } from "react";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { Select } from "@/components/UI";
import { SortingTypes, SortingVariants, productSortingOptions } from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";
import AscIcon from "#/icons/asc.svg?react";
import DeskIcon from "#/icons/desc.svg?react";
import styles from "./ProductSorting.module.scss";

export const ProductSorting: FC = () => {
  const [currentSortingVariant, setCurrentSortingVariant] = useState(productSortingOptions.Default);
  const [isChangeTypeSorting, setIsChangeTypeSorting] = useState(false);
  const { sortBy } = useAppSelector(state => state.productsFilter);
  const { setSortBy, setSortType } = useActions();

  useChangeEffect(() => {
    if (sortBy === SortingVariants.DEFAULT) {
      setCurrentSortingVariant(productSortingOptions.Default);
    }
  }, [sortBy]);

  const handleChangeSelectedSortingVariant = (item: string) => {
    setCurrentSortingVariant(item);
    const selectedOption = item.toLowerCase() as SortingVariants;
    setSortBy(selectedOption);
  };

  const handleChangeTypeSorting = () => {
    setIsChangeTypeSorting(prev => !prev);
    setSortType(isChangeTypeSorting ? SortingTypes.DESC : SortingTypes.ASC);
  };

  return (
    <div className={styles.productSortingContainer}>
      <div className={styles.productSortingContent}>
        <p className={styles.productSortingTitle}>Sort by</p>
        <Select
          currentVariant={currentSortingVariant}
          setCurrentVariant={handleChangeSelectedSortingVariant}
          variants={productSortingOptions}
          isShowSelectedValue
          className={styles.productSortingSelect}
        />
      </div>
      {sortBy !== SortingVariants.DEFAULT && (
        <div className={cn(styles.productSortingIconWrapper, commonStyles.shortButtonIconWrapper)} onClick={handleChangeTypeSorting}>
          {isChangeTypeSorting ? <AscIcon className={styles.productSortingIcon} /> : <DeskIcon className={styles.productSortingIcon} />}
        </div>
      )}
    </div>
  );
};
