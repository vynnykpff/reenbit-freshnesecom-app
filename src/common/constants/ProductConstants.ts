export const enum ProductDeliveryType {
  PAID = "Paid",
  FREE = "Free",
}

const MAX_RANGE = 1000;

export const tempProductId = Math.floor(Math.random() * MAX_RANGE);

export const enum ProductFilterType {
  ALL_CATEGORIES = "all_categories",
  ALL_BRANDS = "all_brands",
}
