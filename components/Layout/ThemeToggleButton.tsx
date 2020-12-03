import { MouseEvent } from "react";
import HeroIcon from "@/components/Layout/HeroIcon";
import { useDarkMode, useDarkModeToggle } from "pages/_app";

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
      className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline"
    >
      <HeroIcon
        name={isDarkMode ? "sun" : "moon"}
        className="w-6 h-6"
        strokeWidth={2}
      />
    </button>
  );
};

export default ThemeToggleButton;
