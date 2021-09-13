import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
const mdxPrism = require('mdx-prism')

const root = process.cwd();

export const getFiles = async (type:any) =>
  fs.readdirSync(path.join(root, "data", type));

export const getFileBySlug = async (type:any, slug:any) => {
  const mdxSource = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = await matter(mdxSource);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source,
    frontmatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (type:any) => {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts:any, postSlug:any) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};