import Link from "next/link";
import Module from "module";

type PostMeta = {
  title: string;
  readTime: number;
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
    <div>
      hello
      <h2>{meta.title}</h2>
      <Link href={"/blog" + link}>
        <a>Read more</a>
      </Link>
    </div>
  );
};

export default Post;
