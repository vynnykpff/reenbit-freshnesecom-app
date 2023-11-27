import { productsApi } from "./api";
import { Product } from "@/common/types";

export class ProductService {
  public static async getProduct(id: Product["id"]): Promise<Product> {
    const response = await productsApi.get<Product>(`/products/${id}`);
    return response.data;
  }
}
