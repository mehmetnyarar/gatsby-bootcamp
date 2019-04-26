import React from 'react'

import Layout from '../components/layout'
import Markdown from '../components/blog/markdown'
import Contentful from '../components/blog/contentful'

import styles from './blog.module.scss'

const BlogPage = () => {
  return (
    <Layout page='Blog'>
      <h1>Blog</h1>
      <ol className={styles.posts}>
        <Markdown />
        <Contentful />
      </ol>
    </Layout>
  )
}

export default BlogPage