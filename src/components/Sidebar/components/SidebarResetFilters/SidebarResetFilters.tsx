import { FC } from "react";
import { useActions } from "@/store";
import { FiltersProps } from "@/common/types";
import { Button } from "@/components/UI";
import styles from "./SidebarResetFilters.module.scss";

export const SidebarResetFilters: FC<FiltersProps> = ({ setIsShowFilters }) => {
  const { resetFilters, setSearchValue } = useActions();

  const handleResetFilters = () => {
    resetFilters();
    setSearchValue("");

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
