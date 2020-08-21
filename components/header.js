import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { useTransition, animated } from 'react-spring';

const Header = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const transitions = useTransition(isOpen, null, {
    from: {
      opacity: 0.5,
      transform: `scale(0.7)`
    },
    enter: {
      opacity: 1,
      transform: `scale(1)`
    },
    leave: {
      opacity: 0,
      transform: `scale(0)`
    },
    config: {
      duration: 200
    }
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && (event.target !== buttonRef.current)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <header className="bg-gray-900">
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl text-white">
              <span className="text-indigo-500 pr-1">{'{'}</span>
              domosedov
              <span className="text-indigo-500 pl-1">{'}'}</span>
            </a>
          </Link>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 rounded bg-indigo-700 text-white font-mono duration-200 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
              Examples
            </button>
            {transitions.map(({ item, key, props }) =>
              item && <animated.div key={key} style={props} ref={menuRef} className="absolute z-10 top-auto right-0 w-40 mt-2 bg-gray-100 shadow-md rounded border">
                <div className="">
                  <Link href="/examples/todo-app">
                    <a>Todo</a>
                  </Link>
                </div>
              </animated.div>
            )}
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;

