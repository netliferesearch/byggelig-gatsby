/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createStepPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions;
  const result = await graphql(`
    {
      allSanityStep(sort: { fields: [stage, stepNumber], order: ASC }) {
        edges {
          node {
            id
            stage
            stepNumber
            title
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
    const stepSlug = `fase${stepNumber}-${slug.current}`;
    const path = `/${stage}/${stepSlug}`;
    const pathUtbygger = `${path}/utbygger`;
    const pathEntreprenor = `${path}/entreprenor`;
    const roleSwitchIsVisible = stage === 'reguleringsplan' ? false : true; // // We use this to hide Roleswitch on step page

    // Log in terminal
    reporter.info(`Creating step page: ${pathUtbygger}`);
    reporter.info(`Creating step page: ${pathEntreprenor}`);

    // We need to do some calculations to figure out the prev and next step,
    // since index includes both stages
    const calculatePrevStep = () => {
      if (stepNumber === 1) {
        return null;
      } else {
        return index === 0 ? null : postEdges[index - 1];
      }
    };
    const calculateNextStep = () => {
      // Check if last step on reguleringsplan (step 4) or byggeprosess (step 8)
      if (
        (stage === 'reguleringsplan' && stepNumber === 4) ||
        (stage === 'byggeprosess' && stepNumber === 8)
      ) {
        return null;
      } else {
        return index === result.length - 1 ? null : postEdges[index + 1];
      }
    };

    // Create pages for utbygger
    createPage({
      path: pathUtbygger,
      component: require.resolve('./src/templates/step.js'),
      context: {
        id,
        showRoleSwitch: roleSwitchIsVisible, // We use this to hide Roleswitch on "Reguleringsplan" step page
        prevStep: calculatePrevStep(),
        nextStep: calculateNextStep(),
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
        showRoleSwitch: roleSwitchIsVisible, // We use this to show Roleswitch on "Byggeprosess" step page
        prevStep: calculatePrevStep(),
        nextStep: calculateNextStep(),
        pathParams: {
          role: 'entreprenor',
          stage,
          stepSlug
        }
      }
    });

    createPageDependency({ pathUtbygger, nodeId: id });
    createPageDependency({ pathEntreprenor, nodeId: id });
  });
}

async function createArticlePages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions;
  const result = await graphql(`
    {
      allSanityArticle {
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

  const postEdges = (result.data.allSanityArticle || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;

    // Create our path
    const articleSlug = slug.current;
    const path = `/artikkel/${articleSlug}`;

    createPage({
      path: path,
      component: require.resolve('./src/templates/article.js'),
      context: {
        id,
        pathParams: {
          articleSlug
        }
      }
    });

    createPageDependency({ path, nodeId: id });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createStepPages(graphql, actions, reporter);
  await createArticlePages(graphql, actions, reporter);
};
