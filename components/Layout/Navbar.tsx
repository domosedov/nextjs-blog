import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center text-black dark:text-white">
        <li>
          <Link href="/blog">
            <a className="px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-300 theme-focus">
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
            <a className="px-2 py-1 rounded-md hover:text-indigo-600 dark:hover:text-indigo-300 theme-focus">
              Резюме
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
