import React from 'react';
import PropTypes from 'prop-types';

import LinkStep from '../LinkStep';

// Create our navigation (prev or next)
const StepNavigation = ({
  step = {},
  direction = '',
  role = '',
  subtle = false
}) => {
  // Error check
  if (!step) return null;

  const {
    title = '',
    stepNumber = '',
    slug: { current: slug = '#' } = {},
    stage = ''
  } = step.node;

  const navPath = `/${stage}/steg${stepNumber}-${slug}/${role}`;

  return (
    <LinkStep
      direction={direction} // "back" or "next"
      number={stepNumber}
      to={navPath}
      subtle={subtle}
    >
      {title}
    </LinkStep>
  );
};

export default StepNavigation;

StepNavigation.propTypes = {
  step: PropTypes.shape({
    node: PropTypes.shape({
      title: PropTypes.string.isRequired,
      stepNumber: PropTypes.number.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string.isRequired
      }),
      stage: PropTypes.string.isRequired
    })
  }),
  direction: PropTypes.string,
  role: PropTypes.string.isRequired,
  subtle: PropTypes.bool
};
