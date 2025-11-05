import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="order-1">
          <Link href="/" className="text-2xl font-bold text-[#ff7300]">
            GasOn
          </Link>
        </div>

        {/* Navigation Center */}
        <div className="order-2 flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6 text-white">
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Login / Switch Button */}
        <div className="order-3">
          {/* Toggle Switch */}
          <button className="relative w-14 h-7 bg-white/20 rounded-full transition-colors duration-300 flex items-center px-1 border border-white/30 hover:bg-white/30 dark:bg-black/30">
            <span className="inline-block w-5 h-5 bg-[#14badb] rounded-full transition-transform duration-300 translate-x-0" />
          </button>
        </div>
      </div>
    </header>
  );
}
