import { ReactNode } from "react";
import "prism-themes/themes/prism-dracula.css";
import Container from "../Layout/Container";

type Props = {
  children: ReactNode;
  meta: {
    title: string;
    tags?: string[];
    readTime: number;
  };
};

const BlogPost = ({ children, meta: { title, readTime, tags } }: Props) => {
  return (
    <Container>
      <p>{title}</p>
      {tags && tags.length && (
        <ul className="space-x-1">
          {tags.map((tag, index) => (
            <span className="text-indigo-700 font-light" key={index}>
              #{tag}
            </span>
          ))}
        </ul>
      )}
      <p>Read time: {readTime}</p>
      <article className="prose prose-lg mx-auto">{children}</article>
    </Container>
  );
};

export default BlogPost;
