import CartIcon from "#/icons/cart.svg?react";
import Logo from "#/icons/logo.svg?react";
import UserProfileIcon from "#/icons/user.svg?react";
import { PRODUCT_CATEGORIES, Routes } from "@/common/constants";
import { Search } from "@/components/UI";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderToolbar.module.scss";

export const HeaderToolbar: FC = () => {
  const [currentProductCategory, setCurrentProductCategory] = useState(PRODUCT_CATEGORIES[0].value);

  return (
    <section className={styles.headerToolbarContainer}>
      <NavLink to={Routes.HOME}>
        <Logo className={styles.headerToolbarLogo} />
      </NavLink>
      <Search currentState={currentProductCategory} setCurrentState={setCurrentProductCategory} />
      <div className={styles.headerToolbarLinksContainer}>
        <NavLink to="#">
          <UserProfileIcon className={styles.headerToolbarIcon} />
        </NavLink>
        <NavLink to={Routes.CART} className={({ isActive }) => (isActive ? styles.active : "")}>
          <CartIcon className={styles.headerToolbarIcon} />
        </NavLink>
      </div>
    </section>
  );
};
