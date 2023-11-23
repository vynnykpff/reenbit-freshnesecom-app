import { FC } from "react";
import { useMatchMedia } from "@/hooks";
import { HeaderCategoriesContextProvider } from "@/contexts";
import { HeaderCategories, HeaderInfo, HeaderInfoMobile, HeaderToolbar } from "./components";
import { Breadcrumbs } from "@/components/UI";
import { MediaQueries } from "@/common/constants";
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
      <div className="container">
        <Breadcrumbs />
      </div>
    </header>
  );
};
