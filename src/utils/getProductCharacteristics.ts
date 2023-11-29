import { Product } from "@/common/types";
import { getProductUnitsMeasure } from "./getProductUnitsMeasure.ts";
import { getDeliveryTime } from "./getDeliveryTime.ts";

export const getProductCharacteristics = (product: Product) => {
  const characteristicMappings: Record<string, string> = {
    originCountry: "Country",
    unitsMeasure: "Buy by",
    category: "Category",
    "delivery.time": "Delivery",
    brand: "Brand",
    "delivery.regions": "Delivery area",
    "stock.amount": "Stock",
  };

  const updatedCharacteristics: Record<string, string> = {};

  for (const [productProp, characteristicProp] of Object.entries(characteristicMappings)) {
    updatedCharacteristics[characteristicProp] =
      (product[productProp as keyof Product] as string) ?? getNestedPropertyValue(product, productProp);

    if (productProp === "stock.amount") {
      const unitMeasure = Object.keys(getProductUnitsMeasure(product.unitsMeasure))[0];
      updatedCharacteristics[characteristicProp] = `${product.stock.amount} ${unitMeasure}`;
    }

    if (productProp === "delivery.time") {
      const deliveryTime = getNestedPropertyValue(product, productProp);
      updatedCharacteristics[characteristicProp] = getDeliveryTime(+deliveryTime);
    }
  }

  return updatedCharacteristics;
};

function getNestedPropertyValue(obj: Product, path: string): Product {
  const props = path.split(".");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
  return props.reduce((acc, prop) => (acc as any)[prop], obj);
}
