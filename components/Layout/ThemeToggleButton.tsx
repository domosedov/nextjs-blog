import React, { useEffect, useReducer } from "react";
import HeroIcon from "@/components/Layout/HeroIcon";

const ThemeToggleButton = () => {
  const [theme, toggle] = useReducer((t) => !t, false);

  const handleSwitchTheme = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    toggle();
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      onClick={handleSwitchTheme}
      type="button"
      className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline"
    >
      <HeroIcon
        name={theme ? "sun" : "moon"}
        className="w-6 h-6"
        strokeWidth={2}
      />
    </button>
  );
};

export default ThemeToggleButton;
