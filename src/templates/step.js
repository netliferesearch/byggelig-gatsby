import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout';
import RoleSwitch from '../components/RoleSwitch';
import ArticlePitch from '../components/ArticlePitch';
import Icon from '../components/Icon';
import Collapsible from '../components/Collapsible';
import SEO from '../components/seo';
import ContentCard from '../components/ContentCard';
import StepNavigation from '../components/StepNavigation';

export default ({ data, pageContext }) => {
  // Destructure our data
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
    icon: { asset: { url: iconUrl = '' } = {} } = {},
    _rawMustHave: advicesMustHave = {},
    _rawShouldHave: advicesShouldHave = {},
    _rawMeetings: meetings = {},
    caseReference = {}
  } = data.sanityStep;

  // Quickfix since we have "ø" in Sanity Schema name. TODO: Fix schema and remove this quickfix
  const roleFix = role === 'entreprenør' ? 'entreprenor' : role;

  // const AdvicesCard = () => {
  //   return (
  //     <ContentCard>
  //       <h2 className="text-center">Dette må du ha på plass</h2>
  //       <ul className="ul-check mt-4">
  //         {advicesMustHave &&
  //           advicesMustHave
  //             .filter(advice =>
  //               advice.role ? advice.role.includes(role) : null
  //             )
  //             .map(advice => {
  //               const { _key, text } = advice;
  //               return (
  //                 <li key={_key}>
  //                   <div className="li-icon">
  //                     <Icon type="check" size="small" />
  //                   </div>
  //                   <BlockContent blocks={text} />
  //                 </li>
  //               );
  //             })}
  //       </ul>
  //     </ContentCard>
  //   );
  // };

  return (
    <Layout>
      <SEO title={`Fase ${stepNumber}: ${title}`} />

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
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-3 col-6 order-lg-1 order-1">
              <StepNavigation step={prevStep} direction="back" role={roleFix} />
            </div>
            <div className="col-lg-6 order-lg-2 order-3 center">
              <Icon src={iconUrl} size="giga" />
              <h1 className="mt-2">
                Fase {stepNumber}:<br />
                {title}
              </h1>
              <p>{intro}</p>
            </div>
            <div className="col-lg-3 col-6 order-lg-3 order-2">
              <StepNavigation step={nextStep} direction="next" role={roleFix} />
            </div>
          </div>

          {showRoleSwitch && (
            <div className="row mt-2">
              <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                <RoleSwitch role={role} stage={stage} stepSlug={stepSlug} />
              </div>
            </div>
          )}
          <article className="mt-3">
            {/* <AdvicesCard /> */}

            <ContentCard>
              <h2 className="text-center">Dette må du ha på plass</h2>
              <ul className="ul-check mt-4">
                {advicesMustHave &&
                  advicesMustHave
                    .filter(advice =>
                      advice.role ? advice.role.includes(role) : null
                    )
                    .map(advice => {
                      const { _key, text } = advice;
                      return (
                        <li key={_key}>
                          <div className="li-icon">
                            <Icon type="check" size="small" />
                          </div>
                          <BlockContent blocks={text} />
                        </li>
                      );
                    })}
              </ul>
            </ContentCard>

            {advicesShouldHave && (
              <div className="mt-6">
                <ContentCard>
                  <Collapsible title="Dette bør du ha på plass">
                    <ul className="ul-check mt-4">
                      {advicesShouldHave
                        .filter(advice =>
                          advice.role ? advice.role.includes(role) : null
                        )
                        .map(advice => {
                          const { _key, text } = advice;
                          return (
                            <li key={_key}>
                              <div className="li-icon">
                                <Icon type="check" size="small" />
                              </div>
                              <BlockContent blocks={text} />
                            </li>
                          );
                        })}
                    </ul>
                  </Collapsible>
                </ContentCard>
              </div>
            )}

            {meetings &&
              meetings[0] &&
              (() => {
                const {
                  title = '',
                  description = '',
                  mustHave = {},
                  shouldHave = {}
                } = meetings[0];
                return (
                  <section className="mt-6">
                    <div className="col-md-6 offset-md-3">
                      <hr />
                      <h1 className="text-center mt-4" id="mote">
                        {title}
                      </h1>
                      <p className="text-center">{description}</p>
                    </div>

                    {mustHave && (
                      <div className="mt-3">
                        <ContentCard>
                          <h2 className="text-center">
                            Dette må du ha på plass
                          </h2>
                          <ul className="ul-check mt-4">
                            {mustHave
                              .filter(advice =>
                                advice.role ? advice.role.includes(role) : null
                              )
                              .map(advice => {
                                const { _key, text } = advice;
                                return (
                                  <li key={_key}>
                                    <div className="li-icon">
                                      <Icon type="check" size="small" />
                                    </div>
                                    <BlockContent blocks={text} />
                                  </li>
                                );
                              })}
                          </ul>
                        </ContentCard>
                      </div>
                    )}
                    {shouldHave && (
                      <div className="mt-6">
                        <ContentCard>
                          <Collapsible title="Dette bør du ha på plass">
                            <ul className="ul-check mt-4">
                              {shouldHave
                                .filter(advice =>
                                  advice.role
                                    ? advice.role.includes(role)
                                    : null
                                )
                                .map(advice => {
                                  const { _key, text } = advice;
                                  return (
                                    <li key={_key}>
                                      <div className="li-icon">
                                        <Icon type="check" size="small" />
                                      </div>
                                      <BlockContent blocks={text} />
                                    </li>
                                  );
                                })}
                            </ul>
                          </Collapsible>
                        </ContentCard>
                      </div>
                    )}
                  </section>
                );
              })()}
          </article>

          <div className="row mt-5">
            <div className="col">
              <StepNavigation
                step={prevStep}
                direction="back"
                role={roleFix}
                subtle
              />
            </div>
            <div className="col">
              <StepNavigation
                step={nextStep}
                direction="next"
                role={roleFix}
                subtle
              />
            </div>
          </div>
        </div>
      </div>
      {/* Adds spacing before footer if there are no case reference */}
      <div className={`${caseReference ? '' : 'mb-6'}`}>
        {caseReference &&
          (() => {
            const {
              title: caseTitle = '',
              intro: caseIntro = '',
              linkText = 'Les mer',
              slug: { current = '#' } = {}
            } = caseReference;
            return (
              <div className="mt-6">
                <ArticlePitch
                  title={caseTitle}
                  intro={caseIntro}
                  linkText={linkText}
                  subtle
                  to={`/artikkel/${current}`}
                />
              </div>
            );
          })()}
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
      slug {
        current
      }
      icon {
        asset {
          url
        }
      }
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
      _rawMeetings
    }
  }
`;
