import { Country, State } from "@/common/types";

type Params = {
  fieldName: string;
  countries: Country[];
  states: State[];
  cities: string[];
};

export const getCartLocation = ({ fieldName, countries, states, cities }: Params) => {
  if (fieldName === "country") {
    return countries.map(country => country.name);
  }

  if (fieldName === "city") {
    return cities;
  }

  return states.map(state => state.name);
};
