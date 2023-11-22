import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { CONTACTS_INFO_LINKS } from "@/common/constants";
import commonStyles from "../../HeaderInfo.module.scss";
import styles from "./HeaderInfoMobile.module.scss";

export const HeaderInfoMobile: FC = () => {
  return (
    <nav className={cn(commonStyles.headerInfoContainer, styles.headerInfoContainerMobile)}>
      <ul className={cn(commonStyles.headerInfoList, styles.headerInfoListMobile)}>
        {CONTACTS_INFO_LINKS.slice(1).map(item => (
          <li className={cn(commonStyles.headerInfoListItem, styles.headerInfoListItemMobile)} key={item.id}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
