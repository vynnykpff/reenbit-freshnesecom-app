import { v4 as uuidv4 } from "uuid";
import { CartBillingInfoItem, FormFields, ValidationRule } from "@/common/types";
import { CartErrorMessages } from "@/common/constants";

const FIELD_LETTERS_PATTERN = /^[A-Za-z]+$/;
const FIELD_NUMBERS_PATTERN = /^\d+$/;

const createBillingInfoItem = (
  label: string,
  placeholder: string,
  fieldName: keyof FormFields,
  fieldRules?: ValidationRule,
): CartBillingInfoItem => ({
  id: uuidv4(),
  label,
  placeholder,
  fieldName,
  fieldRules,
});

export const cartBillingInfoItems: CartBillingInfoItem[] = [
  createBillingInfoItem("First name", "First name", "firstName", {
    required: CartErrorMessages?.EMPTY_FIELD,
    maxLength: { value: 15, message: "Max length should be 15" },
    pattern: { value: FIELD_LETTERS_PATTERN, message: CartErrorMessages?.ONLY_LETTERS },
  }),
  createBillingInfoItem("Last name", "Last name", "lastName", {
    required: CartErrorMessages?.EMPTY_FIELD,
    maxLength: { value: 15, message: "Max length should be 15" },
    pattern: { value: FIELD_LETTERS_PATTERN, message: CartErrorMessages?.ONLY_LETTERS },
  }),
  createBillingInfoItem("Country", "Choose a country", "country", {
    required: CartErrorMessages?.EMPTY_FIELD,
  }),
  createBillingInfoItem("State", "Choose a state", "state", {
    required: CartErrorMessages?.EMPTY_FIELD,
  }),
  createBillingInfoItem("Town / City", "Town or city", "city", {
    required: CartErrorMessages?.EMPTY_FIELD,
  }),
  createBillingInfoItem("Phone number", "Phone number", "phoneNumber"),
  createBillingInfoItem("Email address", "Email address", "emailAddress", {
    required: CartErrorMessages?.EMPTY_FIELD,
    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
  }),
  createBillingInfoItem("Address", "Address", "address", {
    required: CartErrorMessages?.EMPTY_FIELD,
    pattern: { value: /^(?=.*[A-Za-z])(?=.*\d).+$/, message: "Street name and number required" },
  }),
  createBillingInfoItem("ZIP / Postal code", "Postal code or ZIP", "postalCode", {
    required: CartErrorMessages?.EMPTY_FIELD,
    minLength: { value: 6, message: "Min length should be 6" },
    maxLength: { value: 6, message: "Max length should be 6" },
    pattern: { value: FIELD_NUMBERS_PATTERN, message: CartErrorMessages?.ONLY_NUMBERS },
  }),
];
