import { Products } from "@/common/types";

export type ProductCharacteristics = {
  Country: Products["originCountry"];
  Category: Products["category"];
  Brand: Products["brand"];
  Stock: string;
  "Buy by": string;
  Delivery: string;
  "Delivery area": string;
};
