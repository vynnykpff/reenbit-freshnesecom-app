type ProductBrand = {
  name: string;
};

export type ProductCategory = {
  name: string;
  id: string;
  brands: ProductBrand[];
};
