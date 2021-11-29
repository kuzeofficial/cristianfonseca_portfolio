import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

import { PostListItem } from "../../components/PostListItem";
import { formatDate } from "../../lib/format-date";
import { orderByDate } from "../../lib/order-by-date";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import { usePagination } from "../../lib/use-pagination";
import Layout from "../../components/Layout";
interface BlogProps {
  posts: Array<Object>;
}

export default function Blog({ posts }: BlogProps) {
  const { next, currentPage, currentData, maxPage } = usePagination(posts, 21);
  const [element, setElement]: any = useState(null);
  const observer = useRef<IntersectionObserver>();
  const prevY = useRef(0);

  const currentPosts = currentData();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  }, [next]);

  useEffect(() => {
    const currentElement: React.ReactNode = element;
    const currentObserver: any = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <>
      <Layout>
        <h1 className="text-center text-4xl mb-10">Latest Posts</h1>
        <div className="flex flex-wrap overflow-hidden">
          {currentPosts &&
            currentPosts.map((post: any) => (
              <Link key={post.slug} href={`blog/${post.slug}`} passHref>
                <div className="my-1 px-1 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                  <PostListItem
                    title={post.title}
                    date={formatDate(post.date)}
                    tags={post.tags}
                    preview={post.preview}
                  />
                </div>
              </Link>
            ))}
        </div>
        {currentPage !== maxPage && <h1 ref={setElement}>Cargando...</h1>}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesFrontMatter("posts");
  const posts = unorderedPosts.sort(orderByDate);
  return {
    props: { posts },
  };
}
