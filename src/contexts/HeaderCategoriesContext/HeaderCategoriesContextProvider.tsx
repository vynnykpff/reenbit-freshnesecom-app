import { FC, PropsWithChildren, useReducer } from "react";
import { HeaderCategoriesContext, initialState } from "./HeaderCategoriesContext.ts";
import { HeaderCategoriesContextReducer } from "@/contexts";

export const HeaderCategoriesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(HeaderCategoriesContextReducer, initialState.state);

  return <HeaderCategoriesContext.Provider value={{ state, dispatch }}>{children}</HeaderCategoriesContext.Provider>;
};
