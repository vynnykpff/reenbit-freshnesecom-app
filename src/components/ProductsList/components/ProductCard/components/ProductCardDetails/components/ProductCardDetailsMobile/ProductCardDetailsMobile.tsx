import { FC, useState } from "react";
import cn from "classnames";
import { NavigationLink } from "@/common/types";
import { Dropdown } from "@/components/UI";
import commonStyles from "@/styles/Common.module.scss";
import DropdownArrow from "#/icons/select-chevron.svg?react";
import styles from "./ProductCardDetailsMobile.module.scss";

export const ProductCardDetailsMobile: FC<{
  productCharacteristics: NavigationLink[];
}> = ({ productCharacteristics }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <div className={styles.productCardDetailsMobileContainer}>
      <div onClick={toggleDropdown} className={styles.productCardDetailsMobileDropDownMenuWrapper}>
        <h4 className={cn(commonStyles.titleCategory, styles.productCardDetailsTitle)}>Description</h4>
        <DropdownArrow className={cn(commonStyles.arrowIcon, commonStyles.dropdownIcon)} data-active={isDropdownOpen} />
      </div>
      {isDropdownOpen && (
        <div className={styles.productCardDescriptionContainer}>
          <Dropdown
            className={[
              commonStyles.productCardCharacteristics,
              commonStyles.productCardCharacteristicsItem,
              commonStyles.productCardCharacteristicsAccentItem,
            ]}
            dropDownData={productCharacteristics}
            isShowDropList={isDropdownOpen}
            onClick={toggleDropdown}
          />
        </div>
      )}
    </div>
  );
};
