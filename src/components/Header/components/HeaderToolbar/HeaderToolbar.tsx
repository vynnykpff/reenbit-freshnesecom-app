import { removeDataAttribute, setDataAttribute } from "@/utils";
import { FC, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMatchMedia } from "@/hooks";
import { Attributes, MediaQueries, PRODUCT_CATEGORIES, Routes } from "@/common/constants";
import { Search } from "@/components/UI";
import { BurgerMenuButton } from "@/components/UI/BurgerMenuButton";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import CartIcon from "#/icons/cart.svg?react";
import Logo from "#/icons/logo.svg?react";
import UserProfileIcon from "#/icons/user.svg?react";
import styles from "./HeaderToolbar.module.scss";

export const HeaderToolbar: FC = () => {
  const [currentProductCategory, setCurrentProductCategory] = useState(PRODUCT_CATEGORIES[0].value);
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const handleChangeVisibleBurgerMenu = () => {
    if (isOpenBurgerNav) {
      removeDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE });
      return dispatch(updateHeaderCategories({ isOpenBurgerNav: false }));
    }
    setDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE }, "true");
    dispatch(updateHeaderCategories({ isOpenBurgerNav: true }));
  };

  return (
    <section className={styles.headerToolbarContainer}>
      <NavLink to={Routes.HOME}>
        <Logo className={styles.headerToolbarLogo} />
      </NavLink>
      <Search currentState={currentProductCategory} setCurrentState={setCurrentProductCategory} />
      <div className={styles.headerNavbarContainer}>
        <div className={styles.headerToolbarLinksContainer}>
          <NavLink to="#">
            <UserProfileIcon className={styles.headerToolbarIcon} />
          </NavLink>
          <NavLink to={Routes.CART} className={({ isActive }) => (isActive ? styles.active : "")}>
            <CartIcon className={styles.headerToolbarIcon} />
          </NavLink>
        </div>
        {isMobile && (
          <BurgerMenuButton
            isOpen={isOpenBurgerNav}
            onClick={handleChangeVisibleBurgerMenu}
            strokeWidth={2.5}
            color="var(--primary-c1-color-900)"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width={22}
            height={14}
            className={styles.headerToolbarBurgerButton}
          />
        )}
      </div>
    </section>
  );
};
