import { FC } from "react";
import { SidebarBrands, SidebarCategories, SidebarPrice, SidebarRating, SidebarResetFilters } from "./components";
import styles from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <SidebarCategories />
      <SidebarBrands />
      <SidebarRating />
      <SidebarPrice />
      <SidebarResetFilters />
    </aside>
  );
};
