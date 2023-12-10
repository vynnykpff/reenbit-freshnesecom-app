import { FC } from "react";
import cn from "classnames";
import { Button, Input } from "@/components/UI";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./CartPromo.module.scss";

export const CartPromo: FC = () => {
  return (
    <div className={cn(commonStyles.cartInput, styles.cartPromoContainer)}>
      <Input placeholder="Apply promo code" className={styles.cartPromoInput} />
      <Button className={styles.cartPromoButton}>Apply now</Button>
    </div>
  );
};
