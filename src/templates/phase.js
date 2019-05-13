import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  const { title, intro } = data.sanityPhase;
  return (
    <Layout>
      <h1>Fase: {title}</h1>
      <p>Intro: {intro}</p>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityPhase(id: { eq: $id }) {
      id
      title
      intro
      slug {
        _key
        _type
        current
      }
    }
  }
`;
