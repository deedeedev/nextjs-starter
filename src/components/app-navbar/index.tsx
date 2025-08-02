import React from "react";

import Logo from "@/components/app-navbar/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { APP_TITLE, NAVIGATION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import SignInButton from "./signin-button";
import SignUpButton from "./signup-button";
import { ThemeToggle } from "./theme-toggle";

export default function AppNavbar() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            {link.label}
                          </div>
                          <ul>
                            {link.items?.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {index < NAVIGATION_LINKS.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          NAVIGATION_LINKS[index + 1].submenu) ||
                          (link.submenu &&
                            !NAVIGATION_LINKS[index + 1].submenu) ||
                          (link.submenu &&
                            NAVIGATION_LINKS[index + 1].submenu &&
                            link.type !==
                              NAVIGATION_LINKS[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="-mx-1 my-1 h-px w-full bg-border"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem className="w-full">
                    <SignInButton />
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <a href="#" className="flex gap-2 text-primary hover:text-primary/90">
            <Logo />
            <p className="hidden font-bold text-inherit md:block">
              {APP_TITLE}
            </p>
          </a>
        </div>
        {/* Main nav */}
        <div className="flex items-center gap-6">
          {/* Navigation menu */}
          <NavigationMenu viewport={false} className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {NAVIGATION_LINKS.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 font-medium text-muted-foreground hover:text-primary *:[svg]:-me-0.5 *:[svg]:size-3.5">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50 p-1 data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16!">
                        <ul
                          className={cn(
                            link.type === "description"
                              ? "min-w-64"
                              : "min-w-48"
                          )}
                        >
                          {link.items?.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavigationMenuLink
                                href={item.href}
                                className="py-1.5"
                              >
                                {/* Display icon if present */}
                                {link.type === "icon" && "icon" in item && (
                                  <div className="flex items-center gap-2">
                                    {item.icon &&
                                      React.createElement(item.icon, {
                                        size: 16,
                                        className: "text-foreground opacity-60",
                                        "aria-hidden": true,
                                      })}
                                    <span>{item.label}</span>
                                  </div>
                                )}

                                {/* Display label with description if present */}
                                {link.type === "description" &&
                                "description" in item ? (
                                  <div className="space-y-1">
                                    <div className="font-medium">
                                      {item.label}
                                    </div>
                                    <p className="line-clamp-2 text-xs text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                ) : (
                                  // Display simple label if not icon or description type
                                  !link.type ||
                                  (link.type !== "icon" &&
                                    link.type !== "description" && (
                                      <span>{item.label}</span>
                                    ))
                                )}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={link.href}
                      className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <SignInButton />
          <SignUpButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
