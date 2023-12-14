import { DEFAULT_TAX } from "@/common/constants";
import cn from "classnames";
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
    { title: "Subtotal", subtitle: `${getSubtotalPrice(cartProductsPayload)}` },
    {
      title: "Promo",
      subtitle: `${orderPromo.discount}% ${getPriceWithPromo(getSubtotalPrice(cartProductsPayload), orderPromo.discount)}`,
    },
    { title: "Tax", subtitle: `${DEFAULT_TAX}% ${getPriceWithTax(getSubtotalPrice(cartProductsPayload))}` },
  ];

  return (
    <ul className={styles.cartPricingDetailsList}>
      {pricingData.map((item, index) => (
        <li key={index} className={styles.cartPricingDetailsItem}>
          <span className={styles.cartPriceDetailsTitle}>{item.title}</span>
          <div className={styles.cartPriceDetailsContainer}>
            <div className={styles.cartPriceDetailsWrapper}>
              <span className={cn(styles.cartPriceDetailsSubtitle, styles.cartPriceDetailsPrice)}>{item.subtitle}</span>
            </div>
            <span className={cn(styles.cartPriceDetailsSubtitle, styles.cartPriceDetailsCurrency)}>USD</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
