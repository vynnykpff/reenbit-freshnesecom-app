import { FC } from "react";
import { getPriceWithPromo, getPriceWithTax, getSubtotalPrice } from "@/utils";
import { CartPayload, CartPromocode } from "@/common/types";
import styles from "./CartPricingDetails.module.scss";

type PricingItem = {
  title: string;
  subtitle: string;
};

type Props = {
  cartProductsPayload: CartPayload[];
  orderPromo: CartPromocode;
};

export const CartPricingDetails: FC<Props> = ({ cartProductsPayload, orderPromo }) => {
  const pricingData: PricingItem[] = [
    { title: "Subtotal", subtitle: `${getSubtotalPrice(cartProductsPayload)} USD` },
    {
      title: "Promo",
      subtitle: `${orderPromo.discount}% ${getPriceWithPromo(getSubtotalPrice(cartProductsPayload), orderPromo.discount)} USD`,
    },
    { title: "Tax", subtitle: `17% ${getPriceWithTax(getSubtotalPrice(cartProductsPayload))} USD` },
  ];

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
