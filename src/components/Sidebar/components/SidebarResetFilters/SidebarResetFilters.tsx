import { Button } from "@/components/UI";
import { FC } from "react";
import styles from "./SidebarResetFilters.module.scss";

import { FiltersProps } from "@/common/types/Filter/ProductsFilter.ts";

export const SidebarResetFilters: FC<FiltersProps> = ({ setIsShowFilters }) => {
  const handleResetFilters = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return setIsShowFilters && setIsShowFilters(false);
  };

  return (
    <div className={styles.sidebarResetFiltersContainer}>
      <Button className={styles.sidebarResetFiltersButton} onClick={handleResetFilters}>
        Reset
      </Button>
    </div>
  );
};
