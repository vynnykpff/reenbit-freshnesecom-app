import { CartBillingInfoItem } from "@/common/types";
import { v4 as uuidv4 } from "uuid";

export const cartBillingInfoItems: CartBillingInfoItem[] = [
  { label: "First name", placeholder: "First name", id: uuidv4() },
  { label: "Last name", placeholder: "Last name", id: uuidv4() },
  { label: "Email address", placeholder: "Email address", id: uuidv4() },
  { label: "Phone number", placeholder: "Phone number", id: uuidv4() },
  { label: "State / Country", placeholder: "Choose a state or country", id: uuidv4() },
  { label: "Town / City", placeholder: "Town or city", id: uuidv4() },
  { label: "Address", placeholder: "Address", id: uuidv4() },
  { label: "ZIP / Postal code", placeholder: "Postal code or ZIP", id: uuidv4() },
];
