import { ChangeEvent, FC, useEffect } from "react";
import { useActions, useAppSelector } from "@/store";
import { MediaQueries, SEARCH_LENGTH, SearchDelay, SearchPlaceholder, SearchSelectWidth } from "@/common/constants";
import { SelectProps, SelectVariants } from "@/common/types";
import { Input, Select } from "@/components/UI";
import { useDebounce, useMatchMedia, useSearch } from "@/hooks";
import SearchIcon from "#/icons/search.svg?react";
import CancelIcon from "#/icons/cancel.svg?react";
import styles from "./Search.module.scss";

export const Search: FC<
  Pick<SelectProps, "currentVariant" | "setCurrentVariant"> & {
    productsCategories: SelectVariants;
  }
> = ({ currentVariant, setCurrentVariant, productsCategories }) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { setSearchValue, setBrand } = useActions();
  const { localSearchValue, handleSearch } = useSearch();
  const { searchValue, productCategory, productBrand } = useAppSelector(state => state.productsFilter);
  const debounce = useDebounce(localSearchValue, SearchDelay.DEFAULT);

  useEffect(() => {
    handleSetSearch();
  }, [debounce]);

  useEffect(() => {
    const productTempCategory = productBrand.split("_");
    if (productCategory !== productTempCategory[productTempCategory.length - 1]) {
      setBrand("");
    }
  }, [currentVariant]);

  const handleSetSearch = () => {
    if (localSearchValue.length >= SEARCH_LENGTH) {
      return setSearchValue(localSearchValue);
    }
    setSearchValue("");
  };

  const getSelectWidth = (): string => {
    return isMobile ? SearchSelectWidth.MOBILE : SearchSelectWidth.DESKTOP;
  };

  const getSearchPlaceholder = (): string => {
    return isMobile ? SearchPlaceholder.MOBILE : SearchPlaceholder.DESKTOP;
  };

  return (
    <div className={styles.searchContainer}>
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
        />
        {searchValue.length ? (
          <CancelIcon className={styles.searchIcon} onClick={() => handleSearch("")} />
        ) : (
          <SearchIcon className={styles.searchIcon} />
        )}
      </div>
    </div>
  );
};
