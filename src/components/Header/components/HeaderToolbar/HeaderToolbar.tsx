import CartIcon from "#/icons/cart.svg?react";
import Logo from "#/icons/logo.svg?react";
import UserProfileIcon from "#/icons/user.svg?react";
import { Attributes, MediaQueries, Routes } from "@/common/constants";
import { Search } from "@/components/UI";
import { BurgerMenuButton } from "@/components/UI/BurgerMenuButton";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts/HeaderCategoriesContext";
import { useMatchMedia } from "@/hooks";
import { useAppSelector } from "@/store";
import { removeDataAttribute, setDataAttribute } from "@/utils";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderToolbar.module.scss";

export const HeaderToolbar: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { productsCategories } = useAppSelector(state => state.products);
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);

  const handleChangeVisibleBurgerMenu = useCallback(() => {
    if (isOpenBurgerNav) {
      removeDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE });
      return dispatch(updateHeaderCategories({ isOpenBurgerNav: false }));
    }
    setDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE }, "true");
    dispatch(updateHeaderCategories({ isOpenBurgerNav: true }));
  }, [isOpenBurgerNav, dispatch]);

  const [currentProductCategory, setCurrentProductCategory] = useState(productsCategories[0]?.value);

  useEffect(() => {
    if (productsCategories.length) {
      setCurrentProductCategory(productsCategories[0]?.value);
    }
  }, [productsCategories]);

  return (
    <section className={styles.headerToolbarContainer}>
      <NavLink to={Routes.HOME}>
        <Logo className={styles.headerToolbarLogo} />
      </NavLink>
      {currentProductCategory && (
        <Search productsCategories={productsCategories} currentState={currentProductCategory} setCurrentState={setCurrentProductCategory} />
      )}
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
