export const enum ProductDeliveryType {
  PAID = "Paid",
  FREE = "Free",
}

export const ProductCardDetailsObject = {
  Origin: "",
  Brand: "",
  Delivery: "",
  Stock: "",
};

export const ProductCardKeys = Object.keys(ProductCardDetailsObject);

const MAX_RANGE = 1000;

export const tempProductId = Math.floor(Math.random() * MAX_RANGE);
