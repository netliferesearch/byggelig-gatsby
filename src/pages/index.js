import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Hero from '../components/Hero';

export default ({ data }) => {
  console.log(data);
  const items = data.allSanityStep.edges;
  return (
    <Layout>
      <Hero />
      <SEO title="Forside" />
      <h1>Velkommen!</h1>
      <h2>Sider i Sanity</h2>
      <ul>
        {items.map(item => (
          <li key={item.node.id}>
            Fase:{' '}
            <Link to={`/step/${item.node.slug.current}`}>
              {item.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityStep {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`;
