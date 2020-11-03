import { ReactNode } from "react";
import "prism-themes/themes/prism-dracula.css";

type Props = {
  children: ReactNode;
  meta: {
    title: string;
    readTime: number;
  };
};

const BlogPost = ({ children, meta: { title, readTime } }: Props) => {
  return (
    <div className="mx-auto container p-4">
      <p>{title}</p>
      <p>Read time: {readTime}</p>
      <article className="prose prose-lg mx-auto">{children}</article>
    </div>
  );
};

export default BlogPost;
