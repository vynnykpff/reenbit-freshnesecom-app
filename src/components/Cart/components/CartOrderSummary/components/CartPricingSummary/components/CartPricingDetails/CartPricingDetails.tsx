import { FC } from "react";
import styles from "./CartPricingDetails.module.scss";

type PricingItem = {
  title: string;
  subtitle: string;
};

const pricingData: PricingItem[] = [
  { title: "Subtotal", subtitle: "73.98 USD" },
  { title: "Promo", subtitle: "0% 0.00 USD" },
  { title: "Tax", subtitle: "17% 16.53 USD" },
];

export const CartPricingDetails: FC = () => {
  return (
    <ul className={styles.cartPricingDetailsList}>
      {pricingData.map((item, index) => (
        <li key={index} className={styles.cartPricingDetailsItem}>
          <span className={styles.cartPriceDetailsTitle}>{item.title}</span>
          <span className={styles.cartPriceDetailsSubtitle}>{item.subtitle}</span>
        </li>
      ))}
    </ul>
  );
};
