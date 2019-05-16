import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import LinkStep from '../components/LinkStep';

export default ({ data }) => {
  const { title, intro } = data.sanityStep;
  return (
    <Layout>
      <h1>Fase: {title}</h1>
      <p>Intro: {intro}</p>
      <LinkStep to="/" direction="next" number={1}>
        Neste
      </LinkStep>
      <br />
      <LinkStep to="/" direction="back" number={1}>
        Forrige
      </LinkStep>
      <br />
      <LinkStep to="/" direction="next" number={1} subtle>
        Neste subtil
      </LinkStep>
      <br />
      <LinkStep to="/" direction="back" number={1} subtle>
        Forrige subtil
      </LinkStep>
      <br />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityStep(id: { eq: $id }) {
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
