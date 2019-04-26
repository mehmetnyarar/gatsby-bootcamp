const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const { internal, fileAbsolutePath } = node

  if (internal.type === 'MarkdownRemark') {
    const slug = path.basename(fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const markdownPost = path.resolve('src/templates/blog-post-markdown.js')
  const markdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (markdown.errors) throw markdown.errors
  markdown.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields
    createPage({
      path: `/blog/${slug}`,
      component: markdownPost,
      context: {
        slug
      },
    })
  })

  const contentfulPost = path.resolve('src/templates/blog-post-contentful.js')
  const contentful = await graphql(`
    {
      allContentfulBlogPost(limit: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (contentful.errors) throw contentful.errors
  contentful.data.allContentfulBlogPost.edges.forEach(edge => {
    const { slug } = edge.node
    createPage({
      path: `/blog/${slug}`,
      component: contentfulPost,
      context: {
        slug
      },
    })
  })








}