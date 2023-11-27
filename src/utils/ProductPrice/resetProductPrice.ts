import { ProductPrice, ProductPriceBaseParams } from "@/common/types";
import { NotificationDelay, NotificationType, ProductPriceNotifications, ProductsAmountOfUnitsMeasure } from "@/common/constants";

type Params = {
  checkValue: number;
  unitMeasure: ProductsAmountOfUnitsMeasure;
} & ProductPriceBaseParams &
  Omit<ProductPrice, "currency">;

export const resetProductPrice = ({
  original,
  discount,
  checkValue,
  setLocalProductPrice,
  setLocalInputValue,
  unitMeasure,
  setNotification,
}: Params) => {
  setLocalProductPrice({
    original: original * unitMeasure,
    discount: discount * unitMeasure,
  });

  setLocalInputValue(ProductsAmountOfUnitsMeasure.PCS);

  if (checkValue) {
    setNotification({
      title: ProductPriceNotifications.OVER_AMOUNT_VALUE,
      delay: NotificationDelay.DEFAULT,
      type: NotificationType.WARNING,
    });

    return;
  }

  setNotification({
    title: ProductPriceNotifications.INVALID_VALUE,
    delay: NotificationDelay.DEFAULT,
    type: NotificationType.WARNING,
  });
};
