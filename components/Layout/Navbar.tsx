import Link from "next/link";
import { useEffect, useReducer } from "react";
import DropdownMenu from "./DropdownMenu";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center text-white divide-x">
        <li>
          <Link href="/blog">
            <a className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline">
              Блог
            </a>
          </Link>
        </li>
        <li>
          <DropdownMenu buttonText="Примеры">
            <ul>
              <li>
                <Link href="/demo/todo-app">
                  <a>Todo App</a>
                </Link>
              </li>
            </ul>
          </DropdownMenu>
        </li>
        <li>
          <Link href="/resume">
            <a className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline">
              Резюме
            </a>
          </Link>
        </li>
        <li>
          <ThemeToggleButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
