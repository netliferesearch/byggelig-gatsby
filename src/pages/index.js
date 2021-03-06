import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import classNames from 'classnames';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkEntry from '../components/LinkEntry';
import Hero from '../components/Hero';
import ArticlePitch from '../components/ArticlePitch';

export default ({ data }) => {
  const reguleringsplanItems = data.reguleringsplan.edges || {};
  const byggeprosessItems = data.byggeprosess.edges || {};
  const {
    body: heroText = '',
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

  // Check if a role is defined in localStorage, if not we default to the role "utbygger" + check if client or server
  let localStorageValue = '';
  if (typeof window !== 'undefined') {
    localStorageValue = localStorage.getItem('role');
  }
  const defaultRole =
    localStorageValue === 'entreprenor' ? 'entreprenor' : 'utbygger';

  // Toggle animation when items are in view
  const [isInViewList1, setIsInViewList1] = useState(false);
  const [isInViewList2, setIsInViewList2] = useState(false);

  const listClasses = active =>
    classNames({
      'col-lg-3 col-6 mb-sm-2 mb-2 animate-hidden': true,
      'animate-in': active
    });

  const StepItem = (item, currentList) => {
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
    const path = `/${stage}/fase${stepNumber}-${slug.current}/${defaultRole}`;

    return (
      <div className={listClasses(currentList)} key={id}>
        <LinkEntry to={path} icon={iconUrl}>
          {stepNumber}: {title}
        </LinkEntry>
      </div>
    );
  };

  return (
    <Layout>
      <SEO title="Byggelig – Forside" description={heroText} />
      <div className="gradient">
        <Hero />
        <div className="wrap-outer">
          <div className="container-fluid">
            <h1 className="mt-3 mb-3">Hvor er du i prosjektet?</h1>
            <h2 className="mb-2">Reguleringsplan</h2>
            <Waypoint
              bottomOffset="50"
              onEnter={() => {
                setIsInViewList1(true);
              }}
            >
              <nav className="row">
                {reguleringsplanItems.map(item =>
                  StepItem(item, isInViewList1)
                )}
              </nav>
            </Waypoint>

            <h2 className="mt-2 mb-2">Byggeprosess</h2>

            <Waypoint
              bottomOffset="50"
              onEnter={() => {
                setIsInViewList2(true);
              }}
            >
              <nav className="row">
                {byggeprosessItems.map(item => StepItem(item, isInViewList2))}
              </nav>
            </Waypoint>

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
      body
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
