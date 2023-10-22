import { ChangeEvent, FC, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/common/constants";
import { Input, Select } from "@/components/UI";
import { SelectProps } from "@/components/UI/Select/Select.tsx";
import SearchIcon from "#/icons/search.svg?react";
import styles from "./Search.module.scss";

const MAX_WITH_SELECT = "180px";

export const Search: FC<Pick<SelectProps, "currentState" | "setCurrentState">> = ({ currentState, setCurrentState }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.searchContainer}>
      <Select
        currentState={currentState}
        setCurrentState={setCurrentState}
        className={styles.selectCategoriesField}
        variants={PRODUCT_CATEGORIES}
        isShowSelectedValue
        maxWidth={MAX_WITH_SELECT}
      />

      <div className={styles.searchInputContainer}>
        <Input
          className={styles.searchInput}
          placeholder="Search Products, categories ..."
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
