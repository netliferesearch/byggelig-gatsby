/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createPhasePages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions;
  const result = await graphql(`
    {
      allSanityPhase(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPhase || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/phase/${slug.current}/`;

    reporter.info(`Creating phase page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/phase.js'),
      context: { id }
    });

    createPageDependency({ path, nodeId: id });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPhasePages(graphql, actions, reporter);
};
