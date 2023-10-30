import { NavigationLink, Product } from "@/common/types";
import { getSlugString } from "@/utils/getSlugString.ts";

type Props = {
  originCountry: Product["originCountry"];
  brand: Product["brand"];
  delivery: Product["delivery"];
  stock: Product["stock"];
};

export const generateCharacteristics = ({ originCountry, brand, delivery, stock }: Props): NavigationLink[] => {
  return [
    { title: "Origin", value: originCountry, id: `${getSlugString(originCountry)}_country`, link: "#" },
    { title: "Brand", value: brand.text, id: `${getSlugString(originCountry)}_brand`, link: "#" },
    { title: "Delivery", value: delivery.regions, id: `${getSlugString(originCountry)}_region`, link: "#" },
    { title: "Stock", value: `${stock.amount} ${stock.unitMeasure}`, id: `${getSlugString(originCountry)}_stock`, link: "#" },
  ];
};
