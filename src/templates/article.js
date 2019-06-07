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
      <LinkBlock to={props.node.url} external>
        {props.node.text}
      </LinkBlock>
    )
  }
};

export default ({ data }) => {
  const {
    title = '',
    intro = '',
    _rawBodyText: bodyText = ''
  } = data.sanityArticle;

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
        <main className="wrap-outer">
          <article className="container-fluid mt-3">
            <div className="row">
              <div className={imageUrl ? 'col-lg-4' : 'col-lg-8'}>
                <h1>{title}</h1>
                <p className="text-big">{intro}</p>
              </div>
              {imageUrl && (
                <div className="col-lg-8">
                  <IntroImage
                    src={imageUrl}
                    alt={imageDescription}
                    description
                  />
                </div>
              )}
            </div>
            <div className="row mt-3 mb-6">
              <div className="col-md-8">
                <BlockContent blocks={bodyText} serializers={serializers} />
              </div>
            </div>
          </article>
        </main>
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
