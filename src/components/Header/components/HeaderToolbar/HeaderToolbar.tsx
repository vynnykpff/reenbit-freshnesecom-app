import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useActions, useAppSelector } from "@/store";
import { HeaderCategoriesContext, updateHeaderCategories } from "@/contexts";
import { useChangeEffect, useMatchMedia, useWindowScrollable } from "@/hooks";
import { BurgerMenuButton, IconNotification, Search } from "@/components/UI";
import { MediaQueries, Routes } from "@/common/constants";
import CartIcon from "#/icons/cart.svg?react";
import Logo from "#/icons/logo.svg?react";
import UserProfileIcon from "#/icons/user.svg?react";
import styles from "./HeaderToolbar.module.scss";

export const HeaderToolbar: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { productsCategories } = useAppSelector(state => state.products);
  const {
    state: { isOpenBurgerNav },
    dispatch,
  } = useContext(HeaderCategoriesContext);
  const { cartProducts } = useAppSelector(state => state.cart);
  const { productCategory } = useAppSelector(state => state.productsFilter);
  const { setCategory, resetFilters } = useActions();

  useChangeEffect(() => {
    if (!location.pathname.startsWith(Routes.PRODUCTS)) {
      resetFilters();
    }
  }, [location.pathname]);

  useWindowScrollable(!isOpenBurgerNav);
  const onBurgerMenuClick = () => {
    dispatch(updateHeaderCategories({ isOpenBurgerNav: !isOpenBurgerNav }));
  };
  return (
    <section className={styles.headerToolbarContainer}>
      <NavLink to={Routes.HOME}>
        <Logo className={styles.headerToolbarLogo} />
      </NavLink>
      <Search
        productsCategories={productsCategories}
        currentVariant={productCategory || Object.keys(productsCategories)[0]}
        setCurrentVariant={setCategory}
      />
      <div className={styles.headerNavbarContainer}>
        <div className={styles.headerToolbarLinksContainer}>
          <NavLink to="#">
            <UserProfileIcon className={styles.headerToolbarIcon} />
          </NavLink>
          <NavLink to={Routes.CART} className={({ isActive }) => (isActive ? styles.active : "")}>
            <span className={styles.headerToolbarIconWrapper}>
              <CartIcon className={styles.headerToolbarIcon} />
              {!!cartProducts.length && <IconNotification count={cartProducts.length} />}
            </span>
          </NavLink>
        </div>
        {isMobile && (
          <BurgerMenuButton
            isOpen={isOpenBurgerNav}
            onClick={onBurgerMenuClick}
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
