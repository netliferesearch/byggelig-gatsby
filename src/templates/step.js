import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import RoleSwitch from '../components/RoleSwitch';
import ArticlePitch from '../components/ArticlePitch';
import Icon from '../components/Icon';
import SEO from '../components/seo';
import StepNavigation from '../components/StepNavigation';
import AdvicesCard from '../components/AdvicesCard';

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

  return (
    <>
      <SEO title={`Fase ${stepNumber}: ${title}`} description={intro} />
      <Layout>
        <main className="wrap-outer">
          <div className="container-fluid">
            <div className="row mt-md-4 mt-3">
              <div className="col-4 mt-1">
                <StepNavigation step={prevStep} direction="back" role={role} />
              </div>
              <div className="col-4 center">
                <Icon src={iconUrl} size="giga" />
              </div>
              <div className="col-4 mt-1">
                <StepNavigation step={nextStep} direction="next" role={role} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-10 offset-md-1 offset-lg-2 center">
                <h1 className="mt-2">
                  Fase {stepNumber}:<br />
                  {title}
                </h1>
                <p className="text-big">{intro}</p>
              </div>
            </div>

            {showRoleSwitch && (
              <div className="row mt-2">
                <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1">
                  <RoleSwitch role={role} stage={stage} stepSlug={stepSlug} />
                </div>
              </div>
            )}

            <article className="mt-3">
              <AdvicesCard
                title="Dette må du ha på plass"
                advices={advicesMustHave}
                role={role}
              />

              <div className="mt-3">
                <AdvicesCard
                  title="Dette bør du ha på plass"
                  advices={advicesShouldHave}
                  role={role}
                  collapsible
                />
              </div>

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

                      <div className="mt-3">
                        <AdvicesCard
                          title="Dette må du ha på plass"
                          advices={mustHave}
                          role={role}
                        />
                      </div>
                      <div className="mt-3">
                        <AdvicesCard
                          title="Dette bør du ha på plass"
                          advices={shouldHave}
                          role={role}
                          collapsible
                        />
                      </div>
                    </section>
                  );
                })()}
            </article>

            <div className="row mt-5">
              <div className="col-6">
                <StepNavigation
                  step={prevStep}
                  direction="back"
                  role={role}
                  subtle
                />
              </div>
              <div className="col-6">
                <StepNavigation
                  step={nextStep}
                  direction="next"
                  role={role}
                  subtle
                />
              </div>
            </div>
          </div>
        </main>
        {/* Adds spacing before footer if there are no case reference */}
        <div className={`mt-6 ${caseReference ? '' : 'mb-6'}`}>
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
        </div>
      </Layout>
    </>
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
      _rawMustHave(resolveReferences: { maxDepth: 5 })
      _rawShouldHave(resolveReferences: { maxDepth: 5 })
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
