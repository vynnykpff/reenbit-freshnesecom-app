import { productsApi } from "./api";
import { Products } from "@/common/types";

export class ProductsService {
  public static async getProducts(): Promise<Products[]> {
    const response = await productsApi.get<Products[]>("/products");
    return response.data;
  }
}
