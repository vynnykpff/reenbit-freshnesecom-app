import { DispatchAction } from "@/common/types";
import { HeaderCategoriesContextState } from "./HeaderCategoriesContext.ts";

const UPDATE_HEADER_CATEGORIES = "update_header_categories";
const HEADER_CATEGORIES_ERROR = "Unknown action type";

export const updateHeaderCategories = (payload: Partial<HeaderCategoriesContextState>) => ({
  type: UPDATE_HEADER_CATEGORIES,
  payload,
});

export const HeaderCategoriesContextReducer = (
  state: HeaderCategoriesContextState,
  action: DispatchAction,
): HeaderCategoriesContextState => {
  switch (action.type) {
    case UPDATE_HEADER_CATEGORIES:
      return { ...state, ...(action.payload as HeaderCategoriesContextState) };
    default:
      throw new Error(HEADER_CATEGORIES_ERROR);
  }
};
