import { ChangeEvent, FC, useEffect, useState } from "react";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { Button, Input } from "@/components/UI";
import { CartPromocodes, GlobalDelay, NotificationType, OrderInitialPromocode } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./CartPromo.module.scss";

export const CartPromo: FC = () => {
  const [promoValue, setPromoValue] = useState("");
  const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);
  const { orderPromo } = useAppSelector(state => state.cart);
  const { setOrderPromo, setNotification } = useActions();

  useEffect(() => {
    setOrderPromo(OrderInitialPromocode);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPromoValue(value);
  };

  const handleCheckPromoCode = () => {
    const promoCode = CartPromocodes.find(code => code.name === promoValue);

    if (promoCode) {
      setOrderPromo({ name: promoCode.name, discount: promoCode.discount });
      setNotification({ type: NotificationType.SUCCESS, delay: GlobalDelay.PRODUCT_CART, title: `Promo code "${promoCode.name}" applied` });
      setIsShowErrorMessage(false);
      return;
    }
    setIsShowErrorMessage(true);
  };

  return (
    <div className={cn(commonStyles.cartInput, styles.cartPromoContainer, orderPromo.name && styles.cartPromoContainerDisabled)}>
      <Input
        onChange={e => handleChange(e)}
        value={promoValue}
        placeholder="Apply promo code"
        disabled={!!orderPromo.name}
        className={styles.cartPromoInput}
      />
      <Button type="button" onClick={handleCheckPromoCode} disabled={!!orderPromo.name} className={styles.cartPromoButton}>
        Apply now
      </Button>
      {isShowErrorMessage && <span className={commonStyles.cartFieldErrorMessage}>Invalid promo code</span>}
    </div>
  );
};
