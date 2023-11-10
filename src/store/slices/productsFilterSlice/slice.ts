import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getTitleBrand } from "@/utils";
import { ProductBrand, ProductRating, ProductsFilterState } from "@/common/types";
import { ProductFilterType } from "@/common/constants";

const initialState: ProductsFilterState = {
  searchValue: "",
  productCategory: ProductFilterType.ALL_CATEGORIES,
  productBrand: [{ brand: ProductFilterType.ALL_BRANDS }],
  productRating: [{ rating: 0 }],
  isPending: false,
  error: null,
};

export const productsFilterSlice = createSlice({
  name: "products_filter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.productCategory = action.payload;
    },

    setBrand: (state, action: PayloadAction<ProductBrand>) => {
      state.productBrand = state.productBrand.filter(
        item =>
          item.brand !== (ProductFilterType.ALL_BRANDS as string) &&
          item.brand !== getTitleBrand(ProductFilterType.ALL_BRANDS, state.productCategory),
      );

      state.productBrand.push(action.payload);
    },

    removeBrand: (state, { payload: { brand } }: PayloadAction<ProductBrand>) => {
      const newProductBrands = state.productBrand.filter(item => item.brand !== brand);

      if (!newProductBrands.length) {
        newProductBrands.push({ brand: getTitleBrand(ProductFilterType.ALL_BRANDS, state.productCategory) });
      }

      state.productBrand = newProductBrands;
    },

    resetBrands: state => {
      state.productBrand = [{ brand: ProductFilterType.ALL_BRANDS }];
    },

    setRating: (state, action: PayloadAction<ProductRating>) => {
      state.productRating = [...state.productRating, action.payload];
    },
  },
});

export const { actions: productsFilterActions, reducer: productsFilterReducer } = productsFilterSlice;
