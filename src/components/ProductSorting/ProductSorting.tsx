import cn from "classnames";
import { FC, useState } from "react";
import { Select } from "@/components/UI";
import DeskIcon from "#/icons/desc.svg?react";
import AscIcon from "#/icons/asc.svg?react";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./ProductSorting.module.scss";

const productSortingData = {
  Select: "Select",
  Price: "Price",
  Title: "Title",
  Rating: "Rating",
};

export const ProductSorting: FC = () => {
  const [currentSortingVariant, setCurrentSortingVariant] = useState(productSortingData.Select);
  const [isChangeTypeSorting, setIsChangeTypeSorting] = useState(false);

  return (
    <div className={styles.productSortingContainer}>
      <div className={styles.productSortingContent}>
        <p className={styles.productSortingTitle}>Sort by</p>
        <Select
          currentVariant={currentSortingVariant}
          setCurrentVariant={setCurrentSortingVariant}
          variants={productSortingData}
          isShowSelectedValue
          className={styles.productSortingSelect}
        />
      </div>
      <div
        className={cn(styles.productSortingIconWrapper, commonStyles.shortButtonIconWrapper)}
        onClick={() => setIsChangeTypeSorting(prev => !prev)}
      >
        {isChangeTypeSorting ? <AscIcon className={styles.productSortingIcon} /> : <DeskIcon className={styles.productSortingIcon} />}
      </div>
    </div>
  );
};
