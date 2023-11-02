import { useAppSelector } from "@/store";
import { FC } from "react";
import { useMatchMedia } from "@/hooks";
import { MediaQueries } from "@/common/constants";
import { HeaderCategoriesDesktop, HeaderCategoriesMobile } from "./components";

export const HeaderCategories: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);

  if (!productsCategoriesWithBrands.length) {
    return null;
  }

  return isMobile ? <HeaderCategoriesMobile /> : <HeaderCategoriesDesktop />;
};
