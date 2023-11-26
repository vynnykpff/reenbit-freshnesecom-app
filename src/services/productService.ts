import { productsApi } from "./api";
import { Products } from "@/common/types";

export class ProductService {
  public static async getProduct(id: Products["id"]): Promise<Products> {
    const response = await productsApi.get<Products>(`/products/${id}`);
    return response.data;
  }
}
