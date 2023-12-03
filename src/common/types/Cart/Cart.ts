import { BaseState, CityData, Country, State } from "@/common/types";

export type CartState = {
  selectedCountry: string;
  selectedCountryState: string;
  selectedCity: string;
  countries: Country[];
  countryStates: State[];
  countryCities: CityData["data"];
} & BaseState;
