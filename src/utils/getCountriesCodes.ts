import { Country } from "@/common/types";

export const getCountriesCodes = (countries: Country[] = []) => {
  return countries.map(country => country.countryCode);
};
