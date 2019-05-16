/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createStepPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions;
  const result = await graphql(`
    {
      allSanityStep {
        edges {
          node {
            id
            stage
            stepNumber
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityStep || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, stage, stepNumber, slug = {} } = edge.node;

    // Create our paths
    const stepSlug = `steg${stepNumber}-${slug.current}`;
    const path = `/${stage}/${stepSlug}`;
    const pathUtbygger = `${path}/utbygger`;
    const pathEntreprenor = `${path}/entreprenor`;

    // Log in terminal
    reporter.info(`Creating step page: ${pathUtbygger}`);
    reporter.info(`Creating step page: ${pathEntreprenor}`);

    // Create pages for utbygger
    createPage({
      path: pathUtbygger,
      component: require.resolve('./src/templates/step.js'),
      context: {
        id,
        pathParams: {
          role: 'utbygger',
          stage,
          stepSlug
        }
      }
    });

    // Create pages for entreprenør
    createPage({
      path: pathEntreprenor,
      component: require.resolve('./src/templates/step.js'),
      context: {
        id,
        pathParams: {
          role: 'entreprenør',
          stage,
          stepSlug
        }
      }
    });

    createPageDependency({ pathUtbygger, nodeId: id });
    createPageDependency({ pathEntreprenor, nodeId: id });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createStepPages(graphql, actions, reporter);
};
