import Link from "next/link";
import { memo } from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="bg-white px-2 py-1 sticky top-0 shadow-xs z-50 dark:bg-black border-b dark:border-indigo-900">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 transform duration-100 hover:scale-105">
          <Link href="/">
            <a
              className="block transform theme-focus"
              title="Перейти на главную"
            >
              <img
                className="pointer-events-none"
                src="/images/atom.svg"
                alt="atom logo"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="order-1 md:order-2">
            <ThemeToggleButton />
          </div>
          <div className="order-2 md:order-1">
            <div className="hidden md:block">
              <Navbar />
            </div>
            <div className="md:hidden">
              <NavbarMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
