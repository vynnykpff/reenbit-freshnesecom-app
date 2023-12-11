import { BaseState, CityData, Country, FormFields, Product, State } from "@/common/types";

export type CartPayload = {
  id: string;
  price: number;
  amount: number;
  unit: string;
};

export type CartProduct = {
  product: Product;
  selectedUnit: string;
};

export type CartItem = {
  id: Product["id"];
  selectedUnit: CartProduct["selectedUnit"];
};

export type CartState = {
  fields: FormFields;
  countries: Country[];
  states: State[];
  cities: CityData["data"];
  cartProducts: CartProduct[];
  cartProductsPayload: CartPayload[];
} & BaseState;
