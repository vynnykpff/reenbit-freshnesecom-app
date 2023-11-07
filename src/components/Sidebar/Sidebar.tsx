import cn from "classnames";
import { Dispatch, FC, SetStateAction } from "react";
import { SidebarBrands, SidebarCategories, SidebarPrice, SidebarRating, SidebarResetFilters } from "./components";
import styles from "./Sidebar.module.scss";

type Props = {
  setIsShowFilters?: Dispatch<SetStateAction<boolean>>;
  className?: string[];
};

export const Sidebar: FC<Props> = ({ setIsShowFilters, className = "" }) => {
  return (
    <aside className={cn(styles.sidebarContainer, className[0])}>
      <SidebarCategories setIsShowFilters={setIsShowFilters} />
      <SidebarBrands />
      <SidebarRating />
      <SidebarPrice />
      <SidebarResetFilters setIsShowFilters={setIsShowFilters} />
    </aside>
  );
};
