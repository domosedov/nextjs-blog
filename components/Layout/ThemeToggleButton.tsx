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
      className="px-2 py-1 text-gray-700 rounded-full duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-indigo-200"
    >
      <HeroIconSolid
        name={isDarkMode ? "sun" : "moon"}
        className={`${
          isDarkMode ? "text-yellow-500" : "text-indigo-700"
        } w-8 h-8`}
      />
    </button>
  );
};

export default ThemeToggleButton;
