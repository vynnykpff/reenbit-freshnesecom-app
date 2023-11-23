import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { NavigationLink } from "@/common/types";
import { FOOTER_NAVIGATION_TITLES, NAVIGATION_KEYS } from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./FooterNavbarDesktop.module.scss";

export const FooterNavbarDesktop: FC = () => {
  return (
    <nav className={styles.footerNavbarDesktopContainer}>
      {FOOTER_NAVIGATION_TITLES.map((item: Omit<NavigationLink, "link">) => (
        <div key={item.id} className={styles.footerNavbarDesktopNavigateWrapper}>
          <h3 className={cn(commonStyles.titleCategory, styles.footerNavbarDesktopNavigateTitle)}>{item.title}</h3>
          <ul className={styles.footerNavbarDesktopNavigateList}>
            {NAVIGATION_KEYS[item.title]?.map((linkItem: NavigationLink) => (
              <li key={linkItem.id}>
                <Link className={commonStyles.footerNavbarNavigationListItem} to={linkItem.link}>
                  {linkItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
