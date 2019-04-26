import React from 'react'

import Head from '../head'
import Header from './header'
import Footer from './footer'

import '../../styles/index.scss'
import styles from './index.module.scss'

const Layout = ({ page, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Head page={page} />
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout