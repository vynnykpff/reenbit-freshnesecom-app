import { FooterNavbarDesktop, FooterNavbarMobile } from "./components";
import { useMatchMedia } from "@/hooks";
import { FC } from "react";

const TABLET_BREAKPOINTS = 480;

export const FooterNavbar: FC = () => {
  const isMobile = useMatchMedia(`(max-width: ${TABLET_BREAKPOINTS}px)`);
  return isMobile ? <FooterNavbarMobile /> : <FooterNavbarDesktop />;
};
