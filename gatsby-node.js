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
    const path = `/${stage}/steg${stepNumber}-${slug.current}`;
    const pathUtbygger = `${path}/utbygger`;
    const pathEntreprenor = `${path}/entreprenor`;
    reporter.info(`Creating step page: ${pathUtbygger}`);
    reporter.info(`Creating step page: ${pathEntreprenor}`);

    // Create pages for utbygger
    createPage({
      path: pathUtbygger,
      component: require.resolve('./src/templates/step.js'),
      context: { id, role: 'utbygger' }
    });

    // Create pages for entreprenør
    createPage({
      path: pathEntreprenor,
      component: require.resolve('./src/templates/step.js'),
      context: { id, role: 'entreprenor' }
    });

    createPageDependency({ pathUtbygger, nodeId: id });
    createPageDependency({ pathEntreprenor, nodeId: id });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createStepPages(graphql, actions, reporter);
};

// /byggeprosess/steg1-behov/[entreprenor/utbygger]
// context (id OG )

// Generer to sett med sider
// Hver side har en id context
// Må bruke url for å vite "role" og matche mot advice
