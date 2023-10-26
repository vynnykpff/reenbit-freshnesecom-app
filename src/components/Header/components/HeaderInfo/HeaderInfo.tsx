import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { ABOUT_INFO_LINKS, CONTACTS_INFO_LINKS } from "@/common/constants";
import { NavigationLink } from "@/common/types";
import styles from "./HeaderInfo.module.scss";

export const HeaderInfo: FC = () => {
  return (
    <nav className={styles.headerInfoContainer}>
      <ul className={styles.headerInfoList}>
        {CONTACTS_INFO_LINKS.map((contact: NavigationLink) => (
          <li className={styles.headerInfoListItem} key={contact.id}>
            <NavLink to={contact.link}>{contact.title}</NavLink>
          </li>
        ))}
      </ul>
      <ul className={styles.headerInfoList}>
        {ABOUT_INFO_LINKS.map((item: NavigationLink) => (
          <li className={cn(styles.headerInfoListItem, styles.headerAboutListItem)} key={item.id}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
