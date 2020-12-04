import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import "prism-themes/themes/prism-dracula.css";
import { SITE_NAME } from "config";

type ArticleProps = {
  children: ReactNode;
  meta: ArticleMeta;
};

type ArticleMeta = {
  title: string;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
    link?: string;
    about?: string;
  };
  readTime?: number;
  date: Date;
};

const Article = ({ children, meta }: ArticleProps) => {
  return (
    <>
      <NextSeo title={meta.title} />
      <article className="article">
        <h1>{meta.title}</h1>
        <div className="inline-flex items-center mb-2">
          <div>
            {meta.date.toLocaleDateString("ru", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          {meta.readTime && (
            <div className="border-l border-gray-200 ml-4 pl-4 dark:border-indigo-500">
              ☕️ {meta.readTime} минут
            </div>
          )}
        </div>
        {children}
        {meta.author && (
          <div className="mt-8">
            <div className="text-indigo-500 font-bold text-xl">{SITE_NAME}</div>
            <div className="inline-flex items-stretch space-x-4 p-2">
              {meta.author.avatar && (
                <div>
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={meta.author.avatar} alt={meta.author.name} />
                  </div>
                </div>
              )}
              <div>
                {meta.author.link ? (
                  <div>
                    <span>
                      <a target="_blank" rel="author" href={meta.author.link}>
                        {meta.author.name}
                      </a>
                    </span>
                  </div>
                ) : (
                  <div>
                    <span>{meta.author.name}</span>
                  </div>
                )}
                {meta.author.about && (
                  <div>
                    <span>{meta.author.about}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default Article;
