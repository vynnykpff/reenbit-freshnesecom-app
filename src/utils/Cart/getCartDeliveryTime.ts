import { CartProduct } from "@/common/types";

export const getCartDeliveryTime = (cartProducts: CartProduct[]): string => {
  const deliveryTimes = cartProducts.map(({ product }) => product.delivery.time);

  const maxDeliveryTime = Math.max(...deliveryTimes);

  const currentDate = new Date();
  const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + maxDeliveryTime));

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric" as const,
  };

  return deliveryDate.toLocaleDateString("en-US", options);
};
