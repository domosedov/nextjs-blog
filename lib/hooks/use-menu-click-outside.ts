import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useMenuClickOutside = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  buttonRef: RefObject<HTMLButtonElement>,
  menuRef: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          event.target !== buttonRef.current
        ) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);
};
