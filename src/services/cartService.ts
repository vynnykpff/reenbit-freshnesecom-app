import { City, CityData, LocationCountry, State, StateData } from "@/common/types";
import { countriesApi, regionApi } from "./api";

export class CartService {
  public static async getCountries(country: string): Promise<LocationCountry[]> {
    const response = await countriesApi.get<LocationCountry[]>(`/${country}`);
    return response.data;
  }

  public static async getStates(country: string): Promise<State[]> {
    const response = await regionApi.get<StateData>(`/states/q?country=${country}`);
    return response.data.data.states;
  }

  public static async getCities({ country, state }: City): Promise<CityData["data"]> {
    const response = await regionApi.get<CityData>(`/state/cities/q?country=${country}&state=${state}`);
    return response.data.data;
  }
}
