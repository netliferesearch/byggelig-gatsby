import React from 'react';
import { graphql, Link } from 'gatsby';
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
    introImage: {
      description: imageDescription = '',
      asset: { url: imageUrl = '' } = {}
    } = {},
    _rawBodyText: bodyText = '',
    _updatedAt: updatedAt = ''
  } = data.sanityArticle;

  return (
    <Layout>
      <SEO title={`${title}`} />

      <div className="wrap-outer">
        <div className="container-fluid">
          <div className="row">
            <div className="col mt-2">
              <Link to="/" className="link">
                ← Forsiden
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-outer">
        <article className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-4">
              <h1>{title}</h1>
              <p className="text-big">{intro}</p>
            </div>
            <div className="col-lg-8">
              <IntroImage src={imageUrl} alt={imageDescription} description />
            </div>
          </div>
          <div className="row mt-3 mb-6">
            <div className="col-md-8">
              <BlockContent blocks={bodyText} serializers={serializers} />
            </div>
          </div>
        </article>
      </div>
    </Layout>
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
      _rawBodyText
      _updatedAt
    }
  }
`;
