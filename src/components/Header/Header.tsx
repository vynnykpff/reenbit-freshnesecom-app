import { FC } from "react";
import { Link } from "react-router-dom";
import { useMatchMedia } from "@/hooks";
import { MediaQueries, Routes } from "@/common/constants";
import { HeaderCategories, HeaderInfo, HeaderToolbar } from "@/components/Header/components";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import { HeaderCategoriesContextProvider } from "@/contexts/HeaderCategoriesContext";
import styles from "./Header.module.scss";

const MAX_RANGE = 1000;

export const Header: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const tempProductId = Math.floor(Math.random() * MAX_RANGE);

  return (
    <header className={styles.headerContainer}>
      {!isMobile && <HeaderInfo />}
      <HeaderCategoriesContextProvider>
        <HeaderToolbar />
        <HeaderCategories />
      </HeaderCategoriesContextProvider>
      <Breadcrumbs />
      <ul>
        <li>
          <Link to={Routes.PRODUCTS}>All Products</Link>
        </li>
        <li>
          <Link to={`${Routes.PRODUCTS}/${tempProductId}`}>Product</Link>
        </li>
      </ul>
    </header>
  );
};
