import { FC, useState } from "react";
import cn from "classnames";
import { FOOTER_NAVIGATION_TITLES, NAVIGATION_KEYS } from "@/common/constants";
import { NavigationLink } from "@/common/types";
import { Dropdown } from "@/components/UI/Dropdown";
import { useOutsideClick } from "@/hooks";
import DropdownArrow from "#/icons/select-chevron.svg?react";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./FooterNavbarMobile.module.scss";

export const FooterNavbarMobile: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    setOpenDropdown(null);
  });

  const handleDropdownClick = (item: string) => {
    return openDropdown === item ? setOpenDropdown(null) : setOpenDropdown(item);
  };

  return (
    <nav ref={containerRef} className={styles.footerNavbarMobileContainer}>
      {FOOTER_NAVIGATION_TITLES.map((item: Omit<NavigationLink, "link">) => (
        <div key={item.id}>
          <div className={styles.footerNavbarMobileContent} onClick={() => handleDropdownClick(item.title)}>
            <h3 className={cn(commonStyles.titleCategory, styles.footerNavbarMobileTitle)}>{item.title}</h3>
            <DropdownArrow className={cn(commonStyles.arrowIcon, styles.dropdownIcon)} data-active={openDropdown === item.title} />
          </div>
          <Dropdown dropDownData={NAVIGATION_KEYS[item.title]} isShowDropList={openDropdown === item.title} />
        </div>
      ))}
    </nav>
  );
};
