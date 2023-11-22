import { NavigationLink, Products } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

export type GenerateCharacteristicsParams = {
  originCountry: Products["originCountry"];
  brand: Products["brand"];
  delivery: Products["delivery"];
  stock: Products["stock"];
};

export const generateCharacteristics = ({ originCountry, brand, delivery, stock }: GenerateCharacteristicsParams): NavigationLink[] => {
  return [
    { title: "Origin", value: originCountry, id: `${getSlugString(originCountry)}_country`, link: "#" },
    { title: "Brand", value: brand, id: `${getSlugString(originCountry)}_brand`, link: "#" },
    { title: "Delivery", value: delivery.regions, id: `${getSlugString(originCountry)}_region`, link: "#" },
    { title: "Stock", value: `${stock.amount} ${stock.unitMeasure}`, id: `${getSlugString(originCountry)}_stock`, link: "#" },
  ];
};
