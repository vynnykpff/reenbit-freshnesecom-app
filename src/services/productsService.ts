import { productsApi } from "./api";
import { Product } from "@/common/types";

export class ProductsService {
  public static async getProducts(): Promise<Product[]> {
    const response = await productsApi.get<Product[]>("/products");
    return response.data;
  }
}
