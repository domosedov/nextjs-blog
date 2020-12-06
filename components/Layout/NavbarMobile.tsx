import { useMenuClickOutside } from "lib/hooks/use-menu-click-outside";
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
                className="p-4 absolute top-auto w-64 right-0 bg-gray-50 dark:bg-gray-900 rounded border border-indigo-100 dark:border-indigo-900"
              >
                <p className="text-black dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate fugit, pariatur repellat reprehenderit perspiciatis
                  nihil, minus odio quisquam voluptatibus, quae accusamus. Modi
                  temporibus molestias consequatur suscipit vitae velit nobis
                  voluptates.
                </p>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
