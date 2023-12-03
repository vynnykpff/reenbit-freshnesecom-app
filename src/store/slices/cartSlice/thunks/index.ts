import { getCountries } from "./getCountries.ts";
import { getStates } from "./getStates.ts";
import { getCities } from "./getCities.ts";

const thunks = [getCountries, getStates, getCities];

export * from "./getCountries.ts";
export * from "./getStates.ts";
export * from "./getCities.ts";
export default thunks;
