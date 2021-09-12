import React from 'react'
import {getAllFilesMetadata} from '../../lib/mdx'
import Link from 'next/link'

export default function Blog({posts}) {
    console.log(posts.map((post) => {
        return post.title
    }))
    return (
        <>
        <div>
            {posts.map((post:any) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                </Link>
            ))}
        </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesMetadata()
    console.log(posts)
    return {
        props: {
            posts
        }
    }
}