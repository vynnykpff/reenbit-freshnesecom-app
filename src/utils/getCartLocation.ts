import { Country, State } from "@/common/types";
import { CartFormFields } from "@/common/constants";

type Params = {
  fieldName: string;
  countries: Country[];
  states: State[];
  cities: string[];
};

export const getCartLocation = ({ fieldName, countries, states, cities }: Params) => {
  if (fieldName === (CartFormFields.COUNTRY as string)) {
    return countries.map(country => country.name);
  }

  if (fieldName === (CartFormFields.CITY as string)) {
    return cities;
  }

  return states.map(state => state.name);
};
