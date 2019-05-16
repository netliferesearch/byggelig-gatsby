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
    const path = `/${stage}/steg${stepNumber}-${slug.current}/`;
    reporter.info(`Creating step page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/step.js'),
      context: { id }
    });

    createPageDependency({ path, nodeId: id });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createStepPages(graphql, actions, reporter);
};
