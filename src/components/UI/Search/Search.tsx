import SearchIcon from "#/icons/search.svg?react";
import { MediaQueries, SEARCH_PLACEHOLDER, SELECT_WIDTH } from "@/common/constants";
import { SelectProps, SelectVariantFields } from "@/common/types";
import { Input, Select } from "@/components/UI";
import { useMatchMedia } from "@/hooks";
import { ChangeEvent, FC, useState } from "react";
import styles from "./Search.module.scss";

export const Search: FC<Pick<SelectProps, "currentState" | "setCurrentState"> & { productsCategories: SelectVariantFields[] }> = ({
  currentState,
  setCurrentState,
  productsCategories,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);

  const getSelectWidth = (): string => {
    return isMobile ? SELECT_WIDTH.MOBILE : SELECT_WIDTH.DESKTOP;
  };

  const getSearchPlaceholder = (): string => {
    return isMobile ? SEARCH_PLACEHOLDER.MOBILE : SEARCH_PLACEHOLDER.DESKTOP;
  };

  return (
    <div className={styles.searchContainer}>
      <Select
        currentState={currentState}
        setCurrentState={setCurrentState}
        className={styles.selectCategoriesField}
        variants={productsCategories}
        isShowSelectedValue
        maxWidth={getSelectWidth()}
      />

      <div className={styles.searchInputContainer}>
        <Input
          className={styles.searchInput}
          placeholder={getSearchPlaceholder()}
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
