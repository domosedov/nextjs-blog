import { MouseEvent } from "react";
import { useDarkMode, useDarkModeToggle } from "pages/_app";
import HeroIconSolid from "./HeroIconSolid";

const ThemeToggleButton = () => {
  const isDarkMode = useDarkMode();
  const toggleTheme = useDarkModeToggle();

  const handleSwitchTheme = (evt: MouseEvent<HTMLButtonElement>) => {
    toggleTheme!();
  };

  return (
    <button
      onClick={handleSwitchTheme}
      type="button"
      className="px-2 py-1 text-gray-700 rounded-full theme-focus"
    >
      <HeroIconSolid
        name={isDarkMode ? "sun" : "moon"}
        className="w-10 h-10 md:w-8 md:h-8 text-indigo-700 dark:text-yellow-500 hover:text-indigo-500 dark:hover:text-yellow-300"
      />
    </button>
  );
};

export default ThemeToggleButton;
