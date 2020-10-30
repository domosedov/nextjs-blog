import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  meta: {
    title: string;
    readTime: number;
  };
};

const PostLayout = ({ children, meta: { title, readTime } }: Props) => {
  return (
    <div className="mx-auto container bg-green-200 p-4">
      <p>{title}</p>
      <p>Read time: {readTime}</p>
      <article>{children}</article>
    </div>
  );
};

export default PostLayout;
