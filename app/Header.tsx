"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";
import Link from "next/link";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">News</h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <div
            onClick={() => window.open("https://github.com/pratek7/news-app")}
            className=" cursor-pointer hidden hover:bg-cyan-600 dark:hover:bg-slate-500 md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800 "
          >
            GitHub
          </div>
        </div>
      </div>
      {/* Nav links  */}
      <NavLinks />
      {/* search bar  */}
      <SearchBox />
    </header>
  );
}

export default Header;
