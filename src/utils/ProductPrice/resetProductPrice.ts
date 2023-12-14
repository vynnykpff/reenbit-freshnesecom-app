import { ProductPrice, ProductPriceBaseParams } from "@/common/types";
import {
  NotificationDelay,
  NotificationType,
  ProductPriceNotifications,
  ProductsAmountOfUnitsMeasure,
  RESET_PRICE_VALUE,
} from "@/common/constants";

type Params = {
  checkValue: number;
  unitMeasure: ProductsAmountOfUnitsMeasure;
} & ProductPriceBaseParams &
  Omit<ProductPrice, "currency">;

export const resetProductPrice = ({
  original,
  discount,
  checkValue,
  setProductPrice,
  setInputValue,
  unitMeasure,
  setNotification,
}: Params) => {
  if (checkValue) {
    setProductPrice({
      original: original * unitMeasure,
      discount: discount * unitMeasure,
    });
    setInputValue(ProductsAmountOfUnitsMeasure.PCS);
    setNotification({
      title: ProductPriceNotifications.OVER_AMOUNT_VALUE,
      delay: NotificationDelay.DEFAULT,
      type: NotificationType.WARNING,
    });

    return;
  }

  setProductPrice({
    original: RESET_PRICE_VALUE,
    discount: RESET_PRICE_VALUE,
  });

  setInputValue(RESET_PRICE_VALUE);

  setNotification({
    title: ProductPriceNotifications.INVALID_VALUE,
    delay: NotificationDelay.DEFAULT,
    type: NotificationType.WARNING,
  });
};
