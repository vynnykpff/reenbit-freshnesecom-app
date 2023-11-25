export const ProductListCharacteristics: Record<string, string> = {
  Country: "76645",
  Category: "Vegetables",
  Brand: "Apple",
  Stock: "In Stock",
  "Buy by": "pcs, kgs, box, pack",
  Delivery: "in 2 days",
  "Delivery area": "Czech republic",
};

export const enum ProductCharacteristicsOptions {
  COLUMNS = 4,
  NEXT_ITEM = 1,
}

export const ProductListCharacteristicsKeys = Object.keys(ProductListCharacteristics);
