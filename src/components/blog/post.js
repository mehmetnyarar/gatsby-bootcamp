import React from 'react'

import { Link } from 'gatsby'

import styles from './post.module.scss'

const Post = ({ post }) => {
  const { slug, title, createdAt, source } = post
  const link = `/blog/${slug}`

  return (
    <li className={styles.post}>
      <Link to={link} className={styles.blogLink}>
        <h2>{title}<sup>{source}</sup></h2>
        <span className={styles.blogInfo}>
          {createdAt.toString()}
        </span>
      </Link>
    </li>
  )
}

export default Post