import { useAppSelector } from "@/store";
import { useState } from "react";

export const useSearch = () => {
  const { searchValue: initialSearchValue } = useAppSelector(state => state.productsFilter);
  const [localSearchValue, setLocalSearchValue] = useState(initialSearchValue);

  const handleSearch = (searchText: string) => {
    setLocalSearchValue(searchText);
  };

  return { localSearchValue, handleSearch };
};
