import { FC } from "react";
import { useMatchMedia } from "@/hooks";
import { FooterNavbarDesktop, FooterNavbarMobile } from "./components";
import { MediaQueries } from "@/common/constants";

export const FooterNavbar: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  return isMobile ? <FooterNavbarMobile /> : <FooterNavbarDesktop />;
};
