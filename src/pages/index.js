import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LinkEntry from '../components/LinkEntry';
import Hero from '../components/Hero';
import ArticlePitch from '../components/ArticlePitch';

export default ({ data }) => {
  const reguleringsplanItems = data.reguleringsplan.edges || {};
  const byggeprosessItems = data.byggeprosess.edges || {};

  const StepItem = item => {
    const { id, stage, stepNumber, title, slug } = item.node;
    const path = `/${stage}/steg${stepNumber}-${slug.current}/utbygger`;
    return (
      <div className="col-lg-3 col-sm-6 mb-sm-3 mb-2" key={id}>
        <LinkEntry to={path} icon="Some icon">
          {stepNumber}: {title}
        </LinkEntry>
      </div>
    );
  };

  return (
    <Layout>
      <Hero />
      <SEO title="Forside" />
      <h1>Hvor er du i prosjektet?</h1>

      <h2>Reguleringsplan</h2>
      <div className="row">
        {reguleringsplanItems.map(item => StepItem(item))}
      </div>

      <h2>Byggeprosess</h2>
      <div className="row">{byggeprosessItems.map(item => StepItem(item))}</div>

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

// Query all steps, sort by stage, then stepNumber
export const query = graphql`
  query {
    reguleringsplan: allSanityStep(
      sort: { fields: [stepNumber], order: ASC }
      filter: { stage: { eq: "reguleringsplan" } }
    ) {
      edges {
        node {
          id
          title
          stepNumber
          stage
          slug {
            current
          }
        }
      }
    }
    byggeprosess: allSanityStep(
      sort: { fields: [stepNumber], order: ASC }
      filter: { stage: { eq: "byggeprosess" } }
    ) {
      edges {
        node {
          id
          title
          stepNumber
          stage
          slug {
            current
          }
        }
      }
    }
  }
`;
