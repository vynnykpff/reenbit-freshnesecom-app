import { Products } from "@/common/types";
import { getDeliveryTime } from "./getDeliveryTime.ts";

export const getProductCharacteristics = (product: Products) => {
  const characteristicMappings: Record<string, string> = {
    originCountry: "Country",
    category: "Category",
    brand: "Brand",
    "stock.amount": "Stock",
    unitsMeasure: "Buy by",
    "delivery.time": "Delivery",
    "delivery.regions": "Delivery area",
  };

  const updatedCharacteristics: Record<string, string> = {};

  for (const [productProp, characteristicProp] of Object.entries(characteristicMappings)) {
    updatedCharacteristics[characteristicProp] =
      (product[productProp as keyof Products] as string) ?? getNestedPropertyValue(product, productProp);

    if (productProp === "delivery.time") {
      const deliveryTime = getNestedPropertyValue(product, productProp);
      updatedCharacteristics[characteristicProp] = getDeliveryTime(+deliveryTime);
    }
  }

  return updatedCharacteristics;
};

function getNestedPropertyValue(obj: Products, path: string): Products {
  const props = path.split(".");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
  return props.reduce((acc, prop) => (acc as any)[prop], obj);
}
