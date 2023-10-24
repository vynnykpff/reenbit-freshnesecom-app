import { ContextState } from "@/common/types";
import { createContextDefaultState } from "@/utils";
import { createContext } from "react";

export type HeaderCategoriesContextState = {
  isOpenBurgerNav: boolean;
};

export type HeaderCategoriesContextType = ContextState<HeaderCategoriesContextState>;

export const initialState = createContextDefaultState<HeaderCategoriesContextState>({
  isOpenBurgerNav: false,
});

export const HeaderCategoriesContext = createContext<HeaderCategoriesContextType>(initialState);
