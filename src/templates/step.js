import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';
import RoleSwitch from '../components/RoleSwitch';
import LinkStep from '../components/LinkStep';

export default ({ data, pageContext }) => {
  const { role = '', stage = '', stepSlug = '' } = pageContext.pathParams;
  const {
    title = '',
    intro = '',
    stepNumber = '',
    _rawMustHave: advicesMustHave = {},
    _rawShouldHave: advicesShouldHave = {}
  } = data.sanityStep;

  return (
    <Layout>
      <h1>
        Fase {stepNumber}:<br />
        {title}
      </h1>
      <p>{intro}</p>

      <RoleSwitch role={role} stage={stage} stepSlug={stepSlug} />

      <h2>Dette må du ha på plass</h2>
      <ul>
        {advicesMustHave &&
          advicesMustHave
            .filter(advice => (advice.role ? advice.role.includes(role) : null))
            .map(advice => {
              const { _key, text } = advice;
              return (
                <li key={_key}>
                  <BlockContent blocks={text} />
                </li>
              );
            })}
      </ul>

      <h2>Dette bør du ha på plass</h2>
      <ul>
        {advicesShouldHave &&
          advicesShouldHave
            .filter(advice => (advice.role ? advice.role.includes(role) : null))
            .map(advice => {
              const { _key, text } = advice;
              return (
                <li key={_key}>
                  <BlockContent blocks={text} />
                </li>
              );
            })}
      </ul>

      <div className="row mt-5">
        <div className="col">
          <LinkStep direction="back" number={1}>
            En tittel her
          </LinkStep>
        </div>
        <div className="col">
          <LinkStep direction="next" number={3}>
            Og en tittel der
          </LinkStep>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col">
          <LinkStep direction="back" number={1} subtle>
            En tittel
          </LinkStep>
        </div>
        <div className="col">
          <LinkStep direction="next" number={3} subtle>
            En annen tittel
          </LinkStep>
        </div>
      </div>
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
      _rawShouldHave
    }
  }
`;

// TODO: add proptypes
