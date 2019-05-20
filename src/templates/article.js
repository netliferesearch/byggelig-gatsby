import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';
import LinkBlock from '../components/LinkBlock';
import IntroImage from '../components/IntroImage';

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
        <div className="col-lg-4">
          <h1>{title}</h1>
          <p className="text-big">{intro}</p>
        </div>
        <div className="col-lg-8">
          <IntroImage src={imageUrl} alt={imageDescription} description />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8">
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
