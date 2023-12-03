import axios from "axios";

export const productsApi = axios.create({
  baseURL: "https://6477ccd7362560649a2cf9ab.mockapi.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/name",
  headers: {
    "Content-Type": "application/json",
  },
});

export const regionApi = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
  headers: {
    "Content-Type": "application/json",
  },
});
