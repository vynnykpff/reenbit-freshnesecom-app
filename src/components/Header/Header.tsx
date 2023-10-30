import { MediaQueries } from "@/common/constants";
import { HeaderCategories, HeaderInfo, HeaderInfoMobile, HeaderToolbar } from "@/components/Header/components";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import { HeaderCategoriesContextProvider } from "@/contexts/HeaderCategoriesContext";
import { useMatchMedia } from "@/hooks";
import { FC } from "react";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);

  return (
    <header className={styles.headerContainer}>
      {isMobile ? <HeaderInfoMobile /> : <HeaderInfo />}
      <HeaderCategoriesContextProvider>
        <HeaderToolbar />
        <HeaderCategories />
      </HeaderCategoriesContextProvider>
      <Breadcrumbs />
    </header>
  );
};
