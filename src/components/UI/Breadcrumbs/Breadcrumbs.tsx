import { FC } from "react";
import cn from "classnames";
import { Link, NavLink, useLocation, useMatch } from "react-router-dom";
import { useAppSelector } from "@/store";
import { BREADCRUMBS, Routes } from "@/common/constants";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();
  const isHomePage = useMatch(Routes.HOME);
  const { product } = useAppSelector(state => state.product);

  const renderBreadcrumbs = (pathname: string) => {
    let currentLink = "";
    const routePaths = pathname.split("/").filter(Boolean);

    return routePaths.map((crumb, index) => {
      currentLink += `/${crumb}`;

      const isLastElement = index === routePaths.length - 1;
      const breadcrumb = BREADCRUMBS[currentLink as keyof typeof BREADCRUMBS] ?? product.title;

      return (
        <Link key={crumb} className={cn(styles.crumb, isLastElement ? styles.activeCrumb : styles.pastCrumb)} to={currentLink}>
          {breadcrumb}
        </Link>
      );
    });
  };

  return (
    <nav className={styles.breadcrumbs}>
      <NavLink className={isHomePage ? styles.activeCrumb : styles.pastCrumb} to={Routes.HOME}>
        {BREADCRUMBS[Routes.HOME]}
      </NavLink>
      {renderBreadcrumbs(pathname)}
    </nav>
  );
};
