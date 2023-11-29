import { DAY_DELIVERY } from "@/common/constants";

export const getDeliveryTime = (deliveryTime: number) => {
  return deliveryTime > DAY_DELIVERY ? `in ${deliveryTime} days` : ` in ${deliveryTime} day`;
};
