import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LinkEntry from '../components/LinkEntry';
import Hero from '../components/Hero';
import ArticlePitch from '../components/ArticlePitch';

export default ({ data }) => {
  console.log(data);
  const items = data.allSanityStep.edges;
  return (
    <Layout>
      <Hero />
      <SEO title="Forside" />
      <div className="row">
        <div className="col-md-3 mt-md-0 mt-3">
          <LinkEntry to="/" icon="Some icon">
            1: Planinitiativ
          </LinkEntry>
        </div>
        <div className="col-md-3 mt-md-0 mt-3">
          <LinkEntry to="/" icon="Some icon">
            2: Oppstart plan denne er lang ass
          </LinkEntry>
        </div>
        <div className="col-md-3 mt-md-0 mt-3">
          <LinkEntry to="/" icon="Some icon">
            3: Reguleringsplan
          </LinkEntry>
        </div>
        <div className="col-md-3 mt-md-0 mt-3">
          <LinkEntry to="/" icon="Some icon">
            4: Beslutning plan
          </LinkEntry>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
      <div className="mt-4">
        <ArticlePitch
          title="Det lønner seg!"
          intro="Obos Ulven reduserte byggekostnader med 15% 
          ved å involvere viktige aktører fra start."
          to="/"
          imageUrl="https://placehold.it/800x800"
          imageAlt="Some image"
          // subtle
        />
      </div>
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
