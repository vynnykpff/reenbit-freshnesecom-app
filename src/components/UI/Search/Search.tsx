import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect, useMatchMedia } from "@/hooks";
import { SelectProps, SelectVariants } from "@/common/types";
import { Input, Select } from "@/components/UI";
import { SearchDropList } from "@/components/Header/components";
import {
  GlobalDelay,
  MediaQueries,
  ProductFilterType,
  Routes,
  SEARCH_LENGTH,
  SearchPlaceholder,
  SearchSelectWidth,
} from "@/common/constants";
import CancelIcon from "#/icons/cancel.svg?react";
import SearchIcon from "#/icons/search.svg?react";
import styles from "./Search.module.scss";

export const Search: FC<
  Pick<SelectProps, "currentVariant" | "setCurrentVariant"> & {
    productsCategories: SelectVariants;
  }
> = ({ currentVariant, setCurrentVariant, productsCategories }) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);

  const { productCategory, productBrands } = useAppSelector(state => state.productsFilter);
  const searchValue = useAppSelector(state => state.products.searchValue);
  const { setSearchValue, setBrand } = useActions();

  const searchRef = useRef<HTMLDivElement>(null);
  const [localSearchValue, setLocalSearchValue] = useState("");

  const location = useLocation();

  const onSearchInputChange = (inputValue: string) => {
    setLocalSearchValue(inputValue);
    updateGlobalSearchValue();
  };

  const resetSearchValue = () => {
    setSearchValue("");
    setLocalSearchValue("");
  };

  useEffect(() => {
    resetSearchValue();
  }, [productCategory]);

  useEffect(() => {
    const lastBrandObject = productBrands[productBrands.length - 1];
    const productTempCategory = lastBrandObject ? lastBrandObject.split("_") : [];
    if (productCategory !== productTempCategory[productTempCategory.length - 1]) {
      setBrand(ProductFilterType.ALL_BRANDS);
    }
  }, [currentVariant]);

  useChangeEffect(() => {
    setLocalSearchValue("");
    setSearchValue("");
  }, [location.pathname]);

  const updateGlobalSearchValue = useDebouncedCallback(() => {
    if (localSearchValue.length >= SEARCH_LENGTH) {
      setSearchValue(localSearchValue);
    } else {
      setSearchValue("");
    }
  }, GlobalDelay.DEFAULT);

  const getSelectWidth = (): string => {
    return isMobile ? SearchSelectWidth.MOBILE : SearchSelectWidth.DESKTOP;
  };

  const getSearchPlaceholder = (): string => {
    return isMobile ? SearchPlaceholder.MOBILE : SearchPlaceholder.DESKTOP;
  };

  return (
    <div ref={searchRef} className={styles.searchContainer}>
      <Select
        currentVariant={currentVariant}
        setCurrentVariant={setCurrentVariant}
        className={styles.selectCategoriesField}
        variants={productsCategories}
        isShowSelectedValue
        maxWidth={getSelectWidth()}
      />
      <div className={styles.searchInputContainer}>
        <Input
          className={styles.searchInput}
          placeholder={getSearchPlaceholder()}
          value={localSearchValue}
          onChange={e => onSearchInputChange(e.target.value)}
        />
        {searchValue.length ? (
          <CancelIcon className={styles.searchIcon} onClick={resetSearchValue} />
        ) : (
          <SearchIcon className={styles.searchIcon} />
        )}
      </div>
      {location.pathname !== (Routes.PRODUCTS as string) && <SearchDropList searchRef={searchRef} />}
    </div>
  );
};
