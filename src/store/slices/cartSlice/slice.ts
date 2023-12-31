import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { removeItemByCondition } from "@/utils";
import { CartItem, CartPayload, CartProduct, CartPromocode, CartState, FieldData, FormFields } from "@/common/types";
import {
  CartInitialCountries,
  CartInitialFields,
  CartInitialStates,
  ErrorMessages,
  GlobalInitialValues,
  OrderInitialPromocode,
} from "@/common/constants";
import cartSliceThunks from "./thunks";

const initialState: CartState = {
  fields: CartInitialFields,
  countries: CartInitialCountries,
  states: CartInitialStates,
  cities: [],
  cartProducts: [],
  cartProductsPayload: [],
  orderPromo: OrderInitialPromocode,
  isPending: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<FormFields["country"]>) => {
      state.fields.country = action.payload;
    },

    setState: (state, action: PayloadAction<FormFields["state"]>) => {
      state.fields.state = action.payload;
    },

    setCity: (state, action: PayloadAction<FormFields["city"]>) => {
      state.fields.city = action.payload;
    },

    setField: (state, { payload: { key, value } }: PayloadAction<FieldData>) => {
      state.fields[key] = value;
    },

    resetCountries: state => {
      state.countries = CartInitialCountries;
    },

    resetStates: state => {
      state.states = CartInitialStates;
    },

    resetFields: state => {
      state.fields = CartInitialFields;
    },

    setOrderPromo: (state, { payload }: PayloadAction<CartPromocode>) => {
      state.orderPromo = payload;
    },

    setCartProduct: (state, action: PayloadAction<CartProduct>) => {
      const {
        product: { id },
        selectedUnit: unit,
      } = action.payload;

      const isProductAlreadyInCart = state.cartProducts.some(({ product, selectedUnit }) => product.id === id && selectedUnit === unit);

      if (!isProductAlreadyInCart) {
        state.cartProducts = [action.payload, ...state.cartProducts];
      }
    },

    setCartProductPayload: (state, action: PayloadAction<{ products: CartPayload; isCart: boolean }>) => {
      const {
        products: { id, price, unit, amount },
        isCart,
      } = action.payload;

      const updatedCartProductsPrices = state.cartProductsPayload.map(product => {
        if (product.id === id && product.unit === unit) {
          if (!isCart) {
            return { ...product, amount: amount + product.amount };
          }
          return { ...product, amount };
        }
        return product;
      });

      if (!state.cartProductsPayload.some(product => product.id === id && product.unit === unit)) {
        updatedCartProductsPrices.push({ id, price, amount, unit });
      }

      state.cartProductsPayload = updatedCartProductsPrices;
    },

    removeCartProduct: (state, action: PayloadAction<CartItem>) => {
      const { id, selectedUnit: unit } = action.payload;
      state.cartProducts = removeItemByCondition(
        state.cartProducts,
        ({ product, selectedUnit }) => product.id === id && selectedUnit === unit,
      );
    },

    removeCartProductPrice: (state, action: PayloadAction<CartItem>) => {
      const { id, selectedUnit } = action.payload;
      state.cartProductsPayload = removeItemByCondition(
        state.cartProductsPayload,
        product => product.id === id && product.unit === selectedUnit,
      );
    },

    resetCartProducts: state => {
      state.cartProductsPayload = [];
      state.cartProducts = [];
    },

    resetError: state => {
      state.error = null;
    },

    mergeCartProductsPayload: (state, action: PayloadAction<CartItem>) => {
      const { id, selectedUnit, prevSelectedUnit = "" } = action.payload;

      const currentCartProductIndex = state.cartProductsPayload.findIndex(product => product.id === id && product.unit === selectedUnit);
      const currentCartProduct = state.cartProductsPayload[currentCartProductIndex];

      const prevCartProductIndex = state.cartProductsPayload.findIndex(product => product.id === id && product.unit === prevSelectedUnit);
      const prevCartProduct =
        prevCartProductIndex !== +GlobalInitialValues.NOT_FOUND ? state.cartProductsPayload[prevCartProductIndex] : null;

      if (currentCartProduct) {
        const mergedAmount = (prevCartProduct?.amount ?? GlobalInitialValues.DEFAULT) + currentCartProduct.amount;

        const updatedCartProducts = state.cartProductsPayload
          .map(cartProduct => {
            if (cartProduct.id === id && cartProduct.unit === selectedUnit) {
              return {
                ...cartProduct,
                unit: selectedUnit,
                amount: mergedAmount,
              };
            } else if (cartProduct.id === id && cartProduct.unit === prevSelectedUnit) {
              return null;
            }

            return cartProduct;
          })
          .filter(Boolean);

        state.cartProductsPayload = updatedCartProducts as CartPayload[];
      }
    },

    swapCartProductPayload: (state, { payload }: PayloadAction<CartItem>) => {
      const { id, selectedUnit, prevSelectedUnit } = payload;

      const searchedProductPayload = state.cartProductsPayload.find(product => {
        if (product.unit === prevSelectedUnit && product.id === id) {
          product.unit = selectedUnit;
        }
      });

      const searchedProduct = state.cartProducts.find(product => {
        if (product.selectedUnit === prevSelectedUnit && product.product.id === id) {
          product.selectedUnit = selectedUnit;
        }
      });

      if (searchedProductPayload && searchedProduct) {
        state.cartProducts = [...state.cartProducts, searchedProduct];
        state.cartProductsPayload = [...state.cartProductsPayload, searchedProductPayload];
      }
    },
  },

  extraReducers: builder => {
    for (const thunk of cartSliceThunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        state.isPending = true;
        state.error = null;
      });
      builder.addCase(thunk.asyncThunk.rejected, (state, { payload }) => {
        state.isPending = false;
        state.error = (payload as string) ?? ErrorMessages.DEFAULT;
      });
      builder.addCase(thunk.asyncThunk.fulfilled, (state, action) => {
        const storeHandler = thunk.storeHandler as CaseReducer;
        state.isPending = false;
        state.error = null;
        storeHandler(state, action);
      });
    }
  },
});
export const { actions: cartActions, reducer: cartReducer } = cartSlice;
