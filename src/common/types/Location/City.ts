import { CartState } from "@/common/types";

export type CityData = {
  data: string[];
};

export type City = {
  country: CartState["selectedCountry"];
  state: CartState["selectedCountryState"];
};
