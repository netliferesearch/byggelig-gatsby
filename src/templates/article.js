import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';
import LinkBlock from '../components/LinkBlock';
import IntroImage from '../components/IntroImage';
import SEO from '../components/seo';

const serializers = {
  types: {
    linkBlock: props => (
      <div className="mt-4">
        <LinkBlock to={props.node.url} external>
          {props.node.text}
        </LinkBlock>
      </div>
    ),
    linkFile: props => {
      return (
        <a href={props.node.someFile.asset.url}>{props.node.description}</a>
      );
    }
  }
};

export default ({ data }) => {
  const {
    title = '',
    intro = '',
    _rawBodyText: bodyText = ''
  } = data.sanityArticle;

  console.log({data})
  // Since introImage returns 'null' if empty, we can not destructure and default it
  // Therefore we use a || short circuting trick below
  const { introImage } = data.sanityArticle || {};
  const {
    description: imageDescription = '',
    asset: { url: imageUrl = '' } = {}
  } = introImage || {};

  return (
    <>
      <SEO title={`${title}`} description={intro} image={imageUrl} />
      <Layout>
        <div className="bg-white">
          <main className="wrap-outer">
            <article className="container-fluid mt-5">
              <div className="row">
                <div className={imageUrl ? 'col-lg-4 mb-3' : 'col-lg-8 mb-3'}>
                  <h1 className="h2 h2--break mr-1">{title}</h1>
                  <p className="text-big mr-1">{intro}</p>
                </div>
                {imageUrl && (
                  <div className="col-lg-8">
                    <IntroImage
                      image={imageUrl}
                      alt={imageDescription}
                      description
                      bleed
                    />
                  </div>
                )}
              </div>
              <div className="row mt-4 mb-6">
                <div className="col-md-8">
                  <BlockContent blocks={bodyText} serializers={serializers} />
                </div>
              </div>
            </article>
          </main>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityArticle(id: { eq: $id }) {
      title
      intro
      introImage {
        description
        asset {
          url
        }
      }
      _rawBodyText(resolveReferences: { maxDepth: 5 })
      _updatedAt
    }
  }
`;
