import axios from "axios";
import { ProductCategory } from "@/common/types";

export class ProductsService {
  private static categoriesApi = axios.create({
    baseURL: import.meta.env.VITE_PRODUCTS_CATEGORY_PATH as string,
  });

  static async getCategories() {
    const response = await this.categoriesApi.get<ProductCategory[]>("");
    return response.data;
  }
}
