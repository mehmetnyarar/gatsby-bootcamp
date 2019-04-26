import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Post from './post'

const Contentful = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: createdAt,
          order: ASC
        }
      ) {
        edges {
          node {
            title
            slug
            createdAt (formatString: "MMMM Do, YYYY, HH:mm")
          }
        }
      }
    }
  `)

  const posts = allContentfulBlogPost.edges.map(edge => ({
    slug: edge.node.slug,
    title: edge.node.title,
    createdAt: edge.node.createdAt,
    source: 'contentful'
  }))

  return (
    <React.Fragment>
      {posts.map((post, idx) => <Post key={idx} post={post} />)}
    </React.Fragment>
  )
}

export default Contentful