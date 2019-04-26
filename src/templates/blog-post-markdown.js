import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: {
      slug: {
        eq: $slug
      }
    }) {
      frontmatter {
        title
        createdAt
      }
      html
    }
  }
`
const MarkdownPost = ({ slug, data }) => {
  const { title, createdAt } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout page={title}>
      <h1>{title}</h1>
      <p>{createdAt.toString()}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default MarkdownPost