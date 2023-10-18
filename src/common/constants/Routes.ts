export const enum ROUTES {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT = ":category/:subCategory/:brand/:product",
  PRODUCT_CATEGORY = ":category",
  PRODUCT_SUB_CATEGORY = ":subCategory",
  PRODUCT_BRAND = ":brand",
  CART = "/cart",
  ALL = "*",
}
