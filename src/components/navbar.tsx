"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { paths } from "../router/paths";
import { Icon } from "@iconify/react";
import Logo from "./logo";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { LogoHolderBox } from "./svgs/logo-holder";
import { HamburgerIcon } from "./svgs/icons";

const navigation = [
  {
    name: "Contacts",
    href: "#",
  },
  {
    name: "Service Request",
    href: "#",
  },
  {
    name: "Brands",
    href: "/brands",
  },
];

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-10 p-4 mb-4 flex justify-center items-center">
      <LogoHolderBox className="absolute  " />
      <div className="">
        <img
          src="logo.png"
          alt="Logo"
          className="h-10 left-50% translate-x-[-50%]  absolute z-10 "
        />
      </div>
      <div className="absolute z-20 top-2 right-2">
        <HamburgerIcon className="w-10 " variant="light" />
      </div>
    </nav>
  );
}

export default Navbar;
