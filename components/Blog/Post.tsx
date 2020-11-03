import Link from "next/link";
import Module from "module";

type PostMeta = {
  title: string;
  readTime: number;
  tags?: string[];
};

type PostProps = {
  post: {
    link: string;
    module: Module & {
      meta: PostMeta;
    };
  };
};

const Post = ({
  post: {
    link,
    module: { meta },
  },
}: PostProps) => {
  return (
    <li className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl mb-2">{meta.title}</h2>
      <Link href={"/blog" + link}>
        <a className="px-4 py-2 bg-indigo-700 text-white rounded">
          Читать далее
        </a>
      </Link>
    </li>
  );
};

export default Post;
