import Link from "next/link";
import { memo } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white px-4 py-2 sticky top-0 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 transform duration-100 hover:scale-105">
          <Link href="/">
            <a
              className="block transform focus:scale-105 focus:outline-none"
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
        <Navbar />
      </div>
    </header>
  );
};

export default memo(Header);
