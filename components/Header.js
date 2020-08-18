import React, {useState, useEffect, useRef} from "react";
import {useTransition, animated} from 'react-spring';


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
      <div className="container mx-auto py-4 px-2">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-white">
            <span className="text-indigo-500 pr-1">{'{'}</span>
            domosedov
            <span className="text-indigo-500 pl-1">{'}'}</span>
          </div>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="relative px-4 py-2 rounded bg-indigo-700 text-white font-mono duration-200 hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
              Контакты
            </button>
            {transitions.map(({item, key, props}) =>
              item && <animated.div key={key} style={props} ref={menuRef}>
                <div className="absolute top-auto right-0 w-40 mt-2 bg-gray-100 shadow-md rounded border">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id perspiciatis saepe tempore. A
                  architecto assumenda hic id in inventore laboriosam maiores modi natus obcaecati perferendis reiciendis,
                  sunt tempora vero.
                  <a
                    href="https://t.me/domosedov"
                    className="px-2 py-2">
                    <img className="w-16 h-16" src="/images/telegram.svg" alt="Telegram"/>
                  </a>
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

