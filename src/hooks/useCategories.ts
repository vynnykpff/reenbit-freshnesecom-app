import { useEffect, useState } from "react";
import { ProductCategory } from "@/common/types";
import { ProductsService } from "@/services";

export const useCategories = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    void getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    const response = await ProductsService.getCategories();
    setCategories(response);
  };

  return {
    categories,
  };
};
