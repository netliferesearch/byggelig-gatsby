import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';

export default ({ data, pageContext }) => {
  console.log(data);
  const { role = '' } = pageContext;
  const {
    title = '',
    intro = '',
    stepNumber = '',
    _rawMustHave: advices = {}
  } = data.sanityStep;
  console.log('advice', advices);
  return (
    <Layout>
      <h1>
        Fase {stepNumber}:<br />
        {title}
      </h1>
      <p>{intro}</p>
      <h2>Rolle: {role}</h2>
      <h2>Dette må du ha på plass</h2>
      <ul>
        {advices
          .filter(advice => advice.role.includes(role))
          .map(advice => {
            return (
              <li>
                <BlockContent blocks={advice.text} />
              </li>
            );
          })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityStep(id: { eq: $id }) {
      id
      title
      intro
      stepNumber
      _rawMustHave
    }
  }
`;
