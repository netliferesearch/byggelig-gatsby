import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';
import RoleSwitch from '../components/RoleSwitch';
import LinkStep from '../components/LinkStep';
import ArticlePitch from '../components/ArticlePitch';

export default ({ data, pageContext }) => {
  const {
    pathParams: { role = '', stage = '', stepSlug = '' } = {},
    showRoleSwitch = true, // Logic is set in "gatsby-node.js"
    prevStep = null,
    nextStep = null
  } = pageContext;
  const {
    title = '',
    intro = '',
    stepNumber = '',
    _rawMustHave: advicesMustHave = {},
    _rawShouldHave: advicesShouldHave = {},
    caseReference = {}
  } = data.sanityStep;

  return (
    <Layout>
      <div className="row mt-5 mb-5">
        <div className="col">
          {prevStep &&
            prevStep.node &&
            (() => {
              const {
                title: prevTitle = '',
                stepNumber: prevStepNumber = '',
                slug: { current: prevSlug = '#' } = {}
              } = prevStep.node;
              const prevPath = `/${stage}/steg${prevStepNumber}-${prevSlug}/${role}`;
              return (
                <LinkStep
                  direction="back"
                  number={prevStepNumber}
                  to={prevPath}
                >
                  {prevTitle}
                </LinkStep>
              );
            })()}
        </div>
        <div className="col">
          <h1>
            Fase {stepNumber}:<br />
            {title}
          </h1>
          <p>{intro}</p>
        </div>
        <div className="col">
          {nextStep &&
            nextStep.node &&
            (() => {
              const {
                title: nextTitle = '',
                stepNumber: nextStepNumber = '',
                slug: { current: nextSlug = '#' } = {}
              } = nextStep.node;
              const nextPath = `/${stage}/steg${nextStepNumber}-${nextSlug}/${role}`;
              return (
                <LinkStep
                  direction="next"
                  number={nextStepNumber}
                  to={nextPath}
                >
                  {nextTitle}
                </LinkStep>
              );
            })()}
        </div>
      </div>

      {showRoleSwitch && (
        <RoleSwitch role={role} stage={stage} stepSlug={stepSlug} />
      )}

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

      {advicesShouldHave && (
        <>
          <h2>Dette bør du ha på plass</h2>
          <ul>
            {advicesShouldHave
              .filter(advice =>
                advice.role ? advice.role.includes(role) : null
              )
              .map(advice => {
                const { _key, text } = advice;
                return (
                  <li key={_key}>
                    <BlockContent blocks={text} />
                  </li>
                );
              })}
          </ul>
        </>
      )}

      {caseReference &&
        (() => {
          const {
            title: caseTitle = '',
            intro: caseIntro = '',
            linkText = 'Les mer',
            slug: { current = '#' } = {}
          } = caseReference;
          return (
            <ArticlePitch
              title={caseTitle}
              intro={caseIntro}
              linkText={linkText}
              subtle
              to={`/artikkel/${current}`}
            />
          );
        })()}

      <div className="row mt-5 mb-5">
        <div className="col">
          {prevStep &&
            prevStep.node &&
            (() => {
              const {
                title: prevTitle = '',
                stepNumber: prevStepNumber = '',
                slug: { current: prevSlug = '#' } = {}
              } = prevStep.node;
              const prevPath = `/${stage}/steg${prevStepNumber}-${prevSlug}/${role}`;
              return (
                <LinkStep
                  direction="back"
                  number={prevStepNumber}
                  to={prevPath}
                  subtle
                >
                  {prevTitle}
                </LinkStep>
              );
            })()}
        </div>
        <div className="col">
          {nextStep &&
            nextStep.node &&
            (() => {
              const {
                title: nextTitle = '',
                stepNumber: nextStepNumber = '',
                slug: { current: nextSlug = '#' } = {}
              } = nextStep.node;
              const nextPath = `/${stage}/steg${nextStepNumber}-${nextSlug}/${role}`;
              return (
                <LinkStep
                  direction="next"
                  number={nextStepNumber}
                  to={nextPath}
                  subtle
                >
                  {nextTitle}
                </LinkStep>
              );
            })()}
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
      caseReference {
        title
        intro
        linkText
        slug {
          current
        }
      }
    }
  }
`;

// TODO: add proptypes
