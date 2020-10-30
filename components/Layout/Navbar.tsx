import Link from "next/link";

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
          <Link href="/demo">
            <a className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline">
              Демо
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a className="px-2 py-1 text-gray-700 rounded-md duration-150 hover:text-indigo-600 hover:underline focus:outline-none focus:shadow-outline">
              Резюме
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
