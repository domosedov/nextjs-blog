import Container from "@/components/Layout/Container";
import { NextSeo } from "next-seo";
import Image from "next/image";

const Resume = () => {
  return (
    <>
      <NextSeo
        title="Резюме"
        description="На этой странице вы можете ознакомится с моим резюме"
      />
      <div className="py-4">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl border-b-4 text-gray-800 border-indigo-500 tracking-tight leading-6 font-medium">
            Резюме
          </h1>
        </div>
      </div>
      <Container>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-start">
          <div className="md:w-1/3 flex flex-col space-y-4 xl:w-3/12">
            <div
              id="card"
              className="bg-white p-4 rounded-3xl shadow-lg text-gray-800"
            >
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <Image
                    priority
                    width={300}
                    height={300}
                    className="object-cover"
                    src="/images/avatar.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="text-center">
                  <h2 className="tracking-tighter text-xl">
                    Александр Григорий
                  </h2>
                  <p className="font-mono tracking-tight text-orange-600 text-sm">
                    JavaScript Developer
                  </p>
                </div>
                <div className="font-light md:text-sm lg:text-base">
                  <p>
                    👋 Меня зовут Александр, я занимаюсь frontend разработкой
                    WEB-приложений, преимущественно с использованием{" "}
                    <span className="font-medium text-blue-600">ReactJS</span> и
                    его экосистемы.
                  </p>
                  <p>
                    Также разрабатываю API backend на{" "}
                    <span className="font-medium text-green-700">
                      NodeJS/ExpressJS
                    </span>{" "}
                    и{" "}
                    <span className="font-medium text-blue-800">WordPress</span>
                    , используя подход REST.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="contacts"
              className="bg-white p-4 rounded-3xl shadow-lg md:text-sm lg:text-base text-gray-800 space-y-1"
            >
              <div className="flex items-center space-x-2 font-light">
                <div className="w-6 h-6">
                  <img src="/images/icons/gmail.svg" alt="GitHub Logo" />
                </div>
                <a
                  className="block p-1 rounded-full duration-200 hover:underline hover:text-indigo-800 focus:outline-none focus:shadow-outline"
                  target="_blank"
                  href="mailto:domosedov.dev@gmail.com"
                >
                  domosedov.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 font-light">
                <div className="w-6 h-6">
                  <img src="/images/icons/telegram.svg" alt="GitHub Logo" />
                </div>
                <a
                  className="block p-1 rounded-full duration-200 hover:underline hover:text-indigo-800 focus:outline-none focus:shadow-outline"
                  target="_blank"
                  href="https://t.me/domosedov"
                >
                  @domosedov
                </a>
              </div>
              <div className="flex items-center space-x-2 font-light">
                <div className="w-6 h-6">
                  <img src="/images/icons/github.svg" alt="GitHub Logo" />
                </div>
                <a
                  className="block p-1 rounded-full duration-200 hover:underline hover:text-indigo-800 focus:outline-none focus:shadow-outline"
                  target="_blank"
                  href="https://github.com/domosedov"
                >
                  github.com/domosedov
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 bg-white p-4 rounded-3xl shadow-lg font-light text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            eveniet possimus qui voluptate deserunt, error, omnis culpa quidem
            hic voluptas cumque obcaecati odit reiciendis reprehenderit sint ut
            quam ex laudantium? Hic earum repellat soluta consequuntur
            consequatur rem ab facilis cumque laboriosam dolore cum voluptas ea
            odio voluptates modi, adipisci vero delectus inventore, illo,
            aperiam tenetur aspernatur assumenda. Consectetur, doloribus
            eveniet, iusto velit aliquam quia voluptatem delectus necessitatibus
            omnis quis amet eligendi libero sit voluptates saepe cupiditate aut
            veritatis repellendus? Harum eius natus incidunt, officia veritatis
            recusandae possimus quibusdam distinctio delectus quia eum libero
            voluptas aliquam blanditiis nesciunt amet est?
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resume;
