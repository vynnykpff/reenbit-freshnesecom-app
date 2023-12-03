import { FC, useEffect } from "react";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { CartCompleteOrder, CartOrderDetails, CartOrderSummary } from "./components";
import styles from "./Cart.module.scss";

export const Cart: FC = () => {
  const { getCountries, getStates, getCities } = useActions();
  const { countries, countryStates } = useAppSelector(state => state.cart);

  // TODO: refactor this
  useEffect(() => {
    getCountries("ukr");
  }, []);

  useChangeEffect(() => {
    getStates(countries[0].name);
  }, [countries]);

  useChangeEffect(() => {
    getCities({ country: countries[0].name, state: countryStates[1].name });
  }, [countryStates]);

  return (
    <form className={styles.cartContainer}>
      <div className={styles.cartOrderWrapper}>
        <CartOrderDetails />
        <CartOrderSummary />
      </div>
      <CartCompleteOrder />
    </form>
  );
};
