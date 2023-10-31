import { Product } from "@/common/types";
import { productsApi } from "@/services/api";

export class ProductsService {
  public static async getProducts(): Promise<Product[]> {
    const response = await productsApi.get<Product[]>("/products");
    return response.data;
  }
}
