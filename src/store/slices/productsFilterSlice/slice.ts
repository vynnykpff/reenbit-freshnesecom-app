import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getTitleBrand } from "@/utils";
import { Product, ProductsFilterState } from "@/common/types";
import { PRODUCTS_PRICE_DEFAULT, PRODUCT_RATING_DEFAULT, ProductFilterType, SortingTypes, SortingVariants } from "@/common/constants";

const initialState: ProductsFilterState = {
  productCategory: ProductFilterType.ALL_CATEGORIES,
  productBrands: [],
  productRatings: [],
  productPrice: PRODUCTS_PRICE_DEFAULT,
  sortBy: SortingVariants.DEFAULT,
  sortType: SortingTypes.DESC,
};

export const productsFilterSlice = createSlice({
  name: "products_filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Product["category"]>) => {
      state.productPrice = PRODUCTS_PRICE_DEFAULT;
      state.productCategory = action.payload;
    },

    setBrand: (state, action: PayloadAction<string>) => {
      state.productBrands = state.productBrands.filter(
        item =>
          item !== (ProductFilterType.ALL_BRANDS as string) && item !== getTitleBrand(ProductFilterType.ALL_BRANDS, state.productCategory),
      );
      state.productBrands.push(action.payload);
    },

    removeBrand: (state, action: PayloadAction<string>) => {
      const newProductBrands = state.productBrands.filter(item => item !== action.payload);

      if (!newProductBrands.length) {
        state.productPrice = PRODUCTS_PRICE_DEFAULT;
        newProductBrands.push(ProductFilterType.ALL_BRANDS);
      }

      state.productBrands = newProductBrands;
    },

    resetBrands: state => {
      state.productBrands = [];
    },

    setRating: (state, action: PayloadAction<number>) => {
      const newRating = action.payload;

      const ratingExists = state.productRatings.some(item => item === newRating);

      state.productRatings = state.productRatings.filter(item => item !== PRODUCT_RATING_DEFAULT);

      if (ratingExists) {
        state.productRatings = state.productRatings.filter(item => item !== newRating);
      } else {
        state.productRatings = [...state.productRatings, action.payload];
      }
    },

    resetRating: state => {
      state.productRatings = [];
    },

    setPrice: (state, action: PayloadAction<ProductsFilterState["productPrice"]>) => {
      state.productPrice = { ...state.productPrice, ...action.payload };
    },

    resetPrice: state => {
      state.productPrice = PRODUCTS_PRICE_DEFAULT;
    },

    resetFilters: state => {
      state.productCategory = ProductFilterType.ALL_CATEGORIES;
      state.productBrands = [];
      state.productRatings = [];
      state.productPrice = PRODUCTS_PRICE_DEFAULT;
      state.sortBy = SortingVariants.DEFAULT;
      state.sortType = SortingTypes.DESC;
    },

    setSortBy: (state, action: PayloadAction<SortingVariants>) => {
      state.sortBy = action.payload;
    },

    setSortType: (state, action: PayloadAction<SortingTypes>) => {
      state.sortType = action.payload;
    },
  },
});

export const { actions: productsFiltersActions, reducer: productsFiltersReducer } = productsFilterSlice;
