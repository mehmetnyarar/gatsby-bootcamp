import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import styles from './footer.module.scss'

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const { title, author } = site.siteMetadata
  return (
    <footer className={styles.footer}>
      <p>{`${title} ©2019 - by ${author}`}</p>
    </footer>
  )
}

export default Footer