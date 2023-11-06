import { Button } from "@/components/UI";
import { FC } from "react";
import styles from "./SidebarResetFilters.module.scss";

export const SidebarResetFilters: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button className={styles.sidebarResetFiltersButton} onClick={scrollToTop}>
      Reset Filters
    </Button>
  );
};
