"use client";
import { usePathname } from "next/navigation";
import path from "path";
import { categories } from "../constants";
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() == path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7  text-xs md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
