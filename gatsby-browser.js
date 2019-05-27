/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onServiceWorkerUpdateReady = () => {
  // Refresh page if content has changed
  window.location.reload();
};
