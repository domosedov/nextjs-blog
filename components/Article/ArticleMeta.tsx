import { Meta } from "types/article";

type Props = {
  meta: Meta;
};

const ArticleMeta = ({
  meta: { title, readTime, tags, author, date },
}: Props) => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-gray-900 font-bold text-center leading-none">
        {title}
      </h1>
      {date && (
        <div className="inline-flex items-center">{date.toDateString()}</div>
      )}
    </div>
  );
};

export default ArticleMeta;
