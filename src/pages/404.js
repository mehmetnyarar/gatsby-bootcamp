import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Layout page='Not Found'>
      <h1>Page not found</h1>
      <p><Link to='/'>Go homepage</Link></p>
    </Layout>
  )
}

export default NotFound