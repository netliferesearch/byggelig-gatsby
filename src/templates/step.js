import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  const { title = '' } = data.sanityStep;
  return (
    <Layout>
      <h1>Fase: {title}</h1>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityStep(id: { eq: $id }) {
      id
      title
    }
  }
`;
