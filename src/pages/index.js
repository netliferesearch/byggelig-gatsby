import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Example from '../components/Example';

export default ({ data }) => {
  console.log(data);
  const items = data.allSanityPage.edges;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Velkommen!</h1>
      <Example />
      <div>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <h2>Sider i Sanity</h2>
      <ul>
        {items.map(item => (
          <li key={item.node.id}>Tittel: {item.node.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

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
`;
