import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import "prism-themes/themes/prism-dracula.css";

type Meta = {
  title: string;
};

type Props = {
  children: ReactNode;
  meta: Meta;
};

const Article = ({ children, meta }: Props) => {
  return (
    <>
      <NextSeo title={meta.title} />
      <article className="article">{children}</article>
    </>
  );
};

export default Article;
