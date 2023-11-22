import { createContext } from "react";
import { createContextDefaultState } from "@/utils";
import { ContextState } from "@/common/types";

export type HeaderCategoriesContextState = {
  isOpenBurgerNav: boolean;
};

export type HeaderCategoriesContextType = ContextState<HeaderCategoriesContextState>;

export const initialState = createContextDefaultState<HeaderCategoriesContextState>({
  isOpenBurgerNav: false,
});

export const HeaderCategoriesContext = createContext<HeaderCategoriesContextType>(initialState);
