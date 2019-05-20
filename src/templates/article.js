import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';
import LinkBlock from '../components/LinkBlock';

const serializers = {
  types: {
    linkBlock: props => (
      <LinkBlock to={props.node.url}>{props.node.text}</LinkBlock>
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
      <div className="row">
        <div className="col-md-4">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="col-md-8">
          <img
            src={imageUrl}
            alt={imageDescription}
            className="img-wide"
            aria-describedby="intro-image-description"
          />
          <div id="intro-image-description">{imageDescription}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <BlockContent blocks={bodyText} serializers={serializers} />
        </div>
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

// TODO: add proptypes
