import { NavigationLink } from "@/common/types";

type NavigationKeysObject = Record<string, NavigationLink[]>;

export const FOOTER_NAVIGATION_TITLES: Omit<NavigationLink, "link">[] = [
  {
    title: "Get in touch",
    id: "footer_get_in_touch",
  },
  {
    title: "Connections",
    id: "footer_connections",
  },
  {
    title: "Earnings",
    id: "footer_earnings",
  },
  {
    title: "Account",
    id: "footer_account",
  },
];

export const GET_IN_TOUCH_LINKS: NavigationLink[] = [
  {
    title: "About Us",
    link: "#",
    id: "footer_about_us",
  },
  {
    title: "Careers",
    link: "#",
    id: "footer_careers",
  },
  {
    title: "Press Releases",
    link: "#",
    id: "footer_press_releases",
  },
  {
    title: "Blog",
    link: "#",
    id: "footer_blog",
  },
];

export const CONNECTIONS_LINKS: NavigationLink[] = [
  {
    title: "Facebook",
    link: "#",
    id: "footer_facebook",
  },
  {
    title: "Twitter",
    link: "#",
    id: "footer_twitter",
  },
  {
    title: "Instagram",
    link: "#",
    id: "footer_instagram",
  },
  {
    title: "Youtube",
    link: "#",
    id: "footer_youtube",
  },
  {
    title: "LinkedIn",
    link: "#",
    id: "footer_linked_in",
  },
];

export const EARNINGS_LINKS: NavigationLink[] = [
  {
    title: "Become an Affiliate",
    link: "#",
    id: "footer_become_an_affiliate",
  },
  {
    title: "Advertise your product",
    link: "#",
    id: "footer_advertise_your_product",
  },
  {
    title: "Sell on Market",
    link: "#",
    id: "footer_sell_on_market",
  },
];

export const ACCOUNT_LINKS: NavigationLink[] = [
  {
    title: "Your account",
    link: "#",
    id: "footer_your_account",
  },
  {
    title: "Returns Centre",
    link: "#",
    id: "footer_returns_centre",
  },
  {
    title: "100 % purchase protection",
    link: "#",
    id: "footer_one_hundred_percent_purchase_protection",
  },
  {
    title: "Chat with us",
    link: "#",
    id: "footer_chat_with_us",
  },
  {
    title: "Help",
    link: "#",
    id: "footer_help",
  },
];

export const NAVIGATION_KEYS: NavigationKeysObject = {
  "Get in touch": GET_IN_TOUCH_LINKS,
  Connections: CONNECTIONS_LINKS,
  Earnings: EARNINGS_LINKS,
  Account: ACCOUNT_LINKS,
};
