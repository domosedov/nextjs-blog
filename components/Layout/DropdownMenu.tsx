import { useMenuClickOutside } from "lib/hooks/use-menu-click-outside";
import { memo, ReactNode, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";

const DropdownMenu = ({
  buttonText,
  children,
}: {
  buttonText: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translateY(-25%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-25%)" },
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
        className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline"
      >
        {buttonText}
      </button>
      {transition.map(
        ({ item, props, key }) =>
          item && (
            <animated.div
              ref={menuRef}
              style={props}
              key={key}
              className="text-gray-800 absolute border top-auto mt-1 right-0 w-40 bg-white rounded-lg p-4"
            >
              {children}
            </animated.div>
          )
      )}
    </div>
  );
};

export default memo(DropdownMenu);
