import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import "prism-themes/themes/prism-dracula.css";
import { Meta } from "types/article";
import ArticleMeta from "./ArticleMeta";

type Props = {
  children: ReactNode;
  meta: Meta;
};

const Article = ({ children, meta }: Props) => {
  return (
    <>
      <NextSeo title={meta.title} />
      <div className="max-w-3xl mx-auto bg-white p-4 shadow-md rounded-lg my-2 md:p-8 md:shadow-md md:my-4">
        <ArticleMeta meta={meta} />
        <article className="article">{children}</article>
      </div>
    </>
  );
};

export default Article;
