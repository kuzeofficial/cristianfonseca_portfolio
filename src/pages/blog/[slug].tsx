import { MDXRemote } from "next-mdx-remote";
import Head from 'next/head';
import  {MDXComponents}  from "../../components/MDXComponents";
import Layout from "../../components/Layout";
import LayoutBlog from "../../components/MD/LayoutBlog"
import { getFiles, getFileBySlug } from "../../lib/mdx";

export default function Post({ source, frontmatter }) {
  console.log(frontmatter)
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={frontmatter.site} />
        <meta name="twitter:title" content={frontmatter.author} />
        <meta name="twitter:description" content={frontmatter.title} />
        <meta name="twitter:image" content={frontmatter.preview} />
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.title}/>
        <meta property="og:title" content={frontmatter.author}/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:url" content={frontmatter.site} key="ogurl" />
        <meta property="og:image" content={frontmatter.preview} key="ogimage" />
      </Head>
      <Layout>
        <h1 className="textblock text-center font-bold tracking-wide text-transparent theme-gradient bg-clip-text items-center text-4xl lg:text-5xl md:text-3xl sm:text-3xl mb-4">{frontmatter.title}</h1>
        <div className="flex justify-between mb-2">
          <div className="flex flex-row items-center">
            <img src="/images/logo2.webp" height="40px" className="rounded-full lg:w-9 w-9 "/>
            <h3 className="flex-wrap ml-2">{frontmatter.author}</h3>
          </div>
          <div className="flex flex-row items-center">
            <h3 className="flex-wrap content-center justify-end text-red-400 font-bold">{frontmatter.date} </h3>
            <h3 className="flex-wrap ml-2">| {frontmatter.readingTime.text}</h3>
          </div>
        </div>
        <MDXRemote {...source}  components={MDXComponents} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}