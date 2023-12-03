export type Country = {
  name: string;
  countryCode: string;
};

type CountryName = {
  common: string;
};

export type LocationCountry = {
  name: CountryName;
  cca2: string;
};
