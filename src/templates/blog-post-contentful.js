import React from 'react'

import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost (slug: {
        eq: $slug
      }) {
      title
      slug
      createdAt
      body {
        json
      }
    }
  }
`
const ContentfulPost = ({ slug, data }) => {
  const { title, createdAt, body } = data.contentfulBlogPost
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const src = node.data.target.fields.file['en-US'].url
        const alt = node.data.target.fields.title['en-US']
        return <img src={src} alt={alt} />
      }
    }
  }

  return (
    <Layout page={title}>
      <h1>{title}</h1>
      <p>{createdAt.toString()}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default ContentfulPost