import React from "react"
import { graphql } from "gatsby"

// Render
export default ({ data }) => {
  console.log(data)
  const items = data.allSanityPage.edges
  return (
    <div>
      <h1>Test hest</h1>
      <ul>
        {items.map(item => (
          <li>Tittel: {item.node.title}</li>
        ))}
      </ul>
    </div>
  )
}

// Get stuff from Sanity
export const query = graphql`
  query {
    allSanityPage {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
