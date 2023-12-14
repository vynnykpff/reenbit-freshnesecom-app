import { CartPayload } from "@/common/types";
import { CartInitialProduct } from "@/common/constants";

type Params = {
  id: string;
  selectedUnit: string;
  cartProducts: CartPayload[];
};

export const getCartProduct = ({ cartProducts, selectedUnit, id }: Params): CartPayload =>
  cartProducts?.find(product => product.id === id && product.unit === selectedUnit) ?? CartInitialProduct;
