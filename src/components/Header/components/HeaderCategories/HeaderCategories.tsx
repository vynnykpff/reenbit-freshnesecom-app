import { FC } from "react";
import { useAppSelector } from "@/store";
import { useMatchMedia } from "@/hooks";
import { HeaderCategoriesDesktop, HeaderCategoriesMobile } from "./components";
import { MediaQueries } from "@/common/constants";

export const HeaderCategories: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { productsCategoriesWithBrands } = useAppSelector(state => state.products);

  if (!productsCategoriesWithBrands.length) {
    return null;
  }

  return isMobile ? <HeaderCategoriesMobile /> : <HeaderCategoriesDesktop />;
};
