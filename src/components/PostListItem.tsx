import Image from "next/image";
type PostListItemTypes = {
  title: string;
  date: string;
  tags: string[];
  preview: string;
};
export const PostListItem = ({
  title,
  date,
  tags,
  preview,
}: PostListItemTypes) => {
  return (
    <div className="max-w-lg rounded cursor-pointer  overflow-hidden">
      <Image
        className="w-full"
        src={preview}
        alt={title}
        width="570px"
        height="300px"
        placeholder="blur"
        blurDataURL={preview}
      />
      <h3 className="tracking-widest flex mt-1 justify-center text-indigo-500 text-xs w-100 font-medium title-font">
        {date}
      </h3>
      <div className="text-center py-1">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag: string) => (
          <p
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};
