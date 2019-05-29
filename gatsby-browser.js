/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Used by "gatsby-offline-plugin"
export const onServiceWorkerUpdateReady = () => {
  // Refresh page if content has changed
  window.location.reload();
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.state && location.state.noScroll) {
    return false;
  }
  return true;
};
