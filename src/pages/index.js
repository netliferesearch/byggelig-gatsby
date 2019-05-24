import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LinkEntry from '../components/LinkEntry';
import Hero from '../components/Hero';
import ArticlePitch from '../components/ArticlePitch';

export default ({ data }) => {
  const reguleringsplanItems = data.reguleringsplan.edges || {};
  const byggeprosessItems = data.byggeprosess.edges || {};
  const {
    article: {
      title: articleTitle = '',
      intro: articleIntro = '',
      introImage: {
        asset: { url: articleImageUrl = '' } = {},
        description: articleImageDescription = ''
      },
      linkText: articleLinkText,
      slug: { current: articleSlug = '' } = {}
    } = {}
  } = data.sanityPage || {};

  const StepItem = item => {
    const {
      id,
      stage,
      stepNumber,
      title,
      slug,
      icon: {
        asset: { url: iconUrl = '' }
      }
    } = item.node;
    const path = `/${stage}/fase${stepNumber}-${slug.current}/utbygger`;
    return (
      <div className="col-lg-3 col-6 mb-sm-2 mb-2 animate-in" key={id}>
        <LinkEntry to={path} icon={iconUrl}>
          {stepNumber}: {title}
        </LinkEntry>
      </div>
    );
  };

  return (
    <Layout>
      <SEO title="Byggelig – Forside" />
      <Hero />
      <div className="wrap-outer">
        <div className="container-fluid">
          <h1 className="mt-5 mb-3">Hvor er du i prosjektet?</h1>
          <h2 className="mb-2">Reguleringsplan</h2>
          <nav className="row">
            {reguleringsplanItems.map(item => StepItem(item))}
          </nav>

          <h2 className="mt-2 mb-2">Byggeprosess</h2>
          <nav className="row">
            {byggeprosessItems.map(item => StepItem(item))}
          </nav>

          <div className="mt-4 mb-6">
            <ArticlePitch
              title={articleTitle}
              intro={articleIntro}
              to={`/artikkel/${articleSlug}`}
              linkText={articleLinkText}
              imageUrl={articleImageUrl}
              imageAlt={articleImageDescription}
            />
          </div>
        </div>
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
          icon {
            asset {
              url
            }
          }
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
          icon {
            asset {
              url
            }
          }
          slug {
            current
          }
        }
      }
    }
    sanityPage {
      article {
        title
        intro
        introImage {
          asset {
            url
          }
          description
        }
        linkText
        slug {
          current
        }
      }
    }
  }
`;
