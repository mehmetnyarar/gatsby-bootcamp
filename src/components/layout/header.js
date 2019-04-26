import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import styles from './header.module.scss'

const links = [
  { to: '/blog', text: 'Blog' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' }
]

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = site.siteMetadata

  return (
    <header className={styles.header}>
      <h1>
        <Link to='/' className={styles.title}>
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={styles.navItem}
                activeClassName={styles.active}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header