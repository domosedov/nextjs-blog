import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center dark:bg-gray-800">
      <div className="text-xl md:text-6xl bg-yellow-200 p-4 text-center rounded-lg shadow-lg m-4">
        <p>В процессе разработки.</p>
        <p>
          Ознакомится с моим резюме можно{" "}
          <Link href="/resume">
            <a className="text-indigo-700 theme-focus">здесь</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
