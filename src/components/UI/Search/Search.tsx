import CancelIcon from "#/icons/cancel.svg?react";
import SearchIcon from "#/icons/search.svg?react";
import { MediaQueries, Routes, SEARCH_DELAY, SEARCH_LENGTH, SearchPlaceholder, SearchSelectWidth } from "@/common/constants";
import { SelectProps, SelectVariants } from "@/common/types";
import { SearchDropList } from "@/components/Header/components/HeaderToolbar/components/SearchDropList";
import { Input, Select } from "@/components/UI";
import { useMatchMedia } from "@/hooks";
import { useActions, useAppSelector } from "@/store";
import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import styles from "./Search.module.scss";

export const Search: FC<
  Pick<SelectProps, "currentVariant" | "setCurrentVariant"> & {
    productsCategories: SelectVariants;
  }
> = ({ currentVariant, setCurrentVariant, productsCategories }) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { setSearchValue, setBrand } = useActions();
  const { searchValue, productCategory, productBrand } = useAppSelector(state => state.productsFilter);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [localSearchValue, setLocalSearchValue] = useState("");

  const onSearchInputChange = (inputValue: string) => {
    setLocalSearchValue(inputValue);
    updateGlobalSearchValue();
  };

  const updateGlobalSearchValue = useDebouncedCallback(() => {
    if (localSearchValue.length >= SEARCH_LENGTH) {
      setSearchValue(localSearchValue);
    } else {
      setSearchValue("");
    }
  }, SEARCH_DELAY);

  const resetSearchValue = () => {
    setSearchValue("");
    setLocalSearchValue("");
  };

  useEffect(() => {
    const productTempCategory = productBrand.split("_");
    if (productCategory !== productTempCategory[productTempCategory.length - 1]) {
      setBrand("");
    }
  }, [currentVariant]);

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
