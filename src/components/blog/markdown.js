import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Post from './post'

const Markdown = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              createdAt
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = allMarkdownRemark.edges.map(edge => ({
    slug: edge.node.fields.slug,
    title: edge.node.frontmatter.title,
    createdAt: edge.node.frontmatter.createdAt,
    source: 'remark'
  }))

  return (
    <React.Fragment>
      {posts.map((post, idx) => <Post key={idx} post={post} />)}
    </React.Fragment>
  )
}

export default Markdown