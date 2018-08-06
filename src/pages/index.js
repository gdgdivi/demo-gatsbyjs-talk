import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Layout from '../components/layout'

const Post = ({ node }) => (
  <div key={node.fields.slug}>
    <h3>
      <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
        {node.frontmatter.title}
      </Link>
    </h3>
    <small>{node.frontmatter.date}</small>
    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    <hr />
  </div>
)

const IndexPage = ({ data }) => {
  const posts = get(data, 'allMarkdownRemark.edges', [])

  return (
    <Layout>
      {posts.map(({ node }) => 
        <Post node={node} key={node.fields.slug} />
      )}

      <Link to="/contact/">Contato</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
