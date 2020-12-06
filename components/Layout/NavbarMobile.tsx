import { useMenuClickOutside } from "lib/hooks/use-menu-click-outside";
import Link from "next/link";
import { memo, ReactNode, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import HeroIcon from "./HeroIcon";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    config: {
      duration: 150,
    },
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useMenuClickOutside(setIsOpen, buttonRef, menuRef);
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative px-2 py-1 rounded bg-indigo-700 dark:bg-indigo-900 text-white dark:text-gray-300 theme-focus"
      >
        <HeroIcon name="menu" className="w-12 h-12" />
      </button>
      <div className="w-full overflow-hidden">
        {transition.map(
          ({ item, props, key }) =>
            item && (
              <animated.div
                ref={menuRef}
                style={props}
                key={key}
                className="p-4 absolute top-auto w-48 right-0 bg-gray-50 dark:bg-gray-900 rounded border border-indigo-100 dark:border-indigo-900"
              >
                <nav>
                  <ul className="flex flex-col items-center text-black dark:text-white">
                    <li>
                      <Link href="/blog">
                        <a className="px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-300 theme-focus">
                          Блог
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/demo">
                        <a className="px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-300 theme-focus">
                          Примеры
                        </a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/resume">
                        <a className="px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-300 theme-focus">
                          Резюме
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
