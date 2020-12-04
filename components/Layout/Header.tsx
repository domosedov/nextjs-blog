import Link from "next/link";
import { memo } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white px-2 py-1 sticky top-0 shadow-xs z-50 dark:bg-black">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 transform duration-100 hover:scale-105">
          <Link href="/">
            <a className="block transform my-focus" title="Перейти на главную">
              <img
                className="pointer-events-none"
                src="/images/atom.svg"
                alt="atom logo"
              />
            </a>
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default memo(Header);
