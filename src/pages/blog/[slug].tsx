import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import {getFileBySlug, getFiles} from '../../lib/mdx'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'

function Post({source, frontmatter}) {
    console.log(frontmatter)
    const components = {
        h1: (props) => <h1 style={{ color: 'tomato', fontSize:'24px' }} {...props} />,
      }
    return (
        <Layout>
            <MDXRemote {...source} components={components}/>
            <Footer>Developed with 💙 by Cristian Fonseca</Footer>
        </Layout>
    )
}

export default Post

export async function getStaticProps({params}) {
    const {source, frontmatter} = await getFileBySlug(params.slug)
    return {
        props: {
            source,
            frontmatter
        }
    }
}

export async function getStaticPaths(){
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, "")
        }
    }))
    return {
        paths,
        fallback: false,
    }
}