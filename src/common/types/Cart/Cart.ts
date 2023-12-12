import { BaseState, CityData, Country, State } from "@/common/types";

export type FormFields = {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  postalCode: string;
  orderNotes: string;
  confirmOrder: string;
};

export type FieldData = {
  key: keyof FormFields;
  value: string;
};

export type CartState = {
  fields: FormFields;
  countries: Country[];
  states: State[];
  cities: CityData["data"];
} & BaseState;
