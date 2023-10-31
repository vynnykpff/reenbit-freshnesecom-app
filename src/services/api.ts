import axios from "axios";

export const productsApi = axios.create({
  baseURL: "https://6477ccd7362560649a2cf9ab.mockapi.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});
