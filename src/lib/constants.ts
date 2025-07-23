import { NavigationLink } from "@/types";

export const APP_TITLE = "Next.js Starter";

export const APP_DESCRIPTION = "A basic starter for next.js";

// Navigation links array to be used in both desktop and mobile menus
// https://originui.com/navbar
export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    type: "simple",
    label: "Home",
    href: "/",
    submenu: false,
  },
  {
    type: "simple",
    label: "Profile",
    href: "/profile",
    submenu: false,
  },
  // {
  //   type: "icon",
  //   label: "Descrizione",
  //   submenu: true,
  //   items: [
  //     {
  //       href: "/item1",
  //       label: "Item 1",
  //       icon: LifeBuoyIcon,
  //     },
  //   ],
  // },
];
