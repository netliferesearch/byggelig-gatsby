/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/* global window, document */
const scrollTo = id => {
  const el = document.querySelector(id);
  if (el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo(0, rect.top + scrollTop - 40);
  }
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (window.location.hash) {
    return false;
  } else if (location && location.state && location.state.noScroll) {
    return false;
  }
  return true;
};

export const onInitialClientRender = () => {
  if (window.location.hash) {
    scrollTo(window.location.hash);
  }
};
