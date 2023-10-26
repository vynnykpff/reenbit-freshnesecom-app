import { MediaQueries } from "@/common/constants";
import { FooterNavbarDesktop, FooterNavbarMobile } from "./components";
import { useMatchMedia } from "@/hooks";
import { FC } from "react";

export const FooterNavbar: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  return isMobile ? <FooterNavbarMobile /> : <FooterNavbarDesktop />;
};
