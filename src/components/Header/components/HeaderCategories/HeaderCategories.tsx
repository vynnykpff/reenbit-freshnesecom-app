import { FC } from "react";
import { useMatchMedia } from "@/hooks";
import { MediaQueries } from "@/common/constants";
import { HeaderCategoriesDesktop, HeaderCategoriesMobile } from "./components";

export const HeaderCategories: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);

  return isMobile ? <HeaderCategoriesMobile /> : <HeaderCategoriesDesktop />;
};
