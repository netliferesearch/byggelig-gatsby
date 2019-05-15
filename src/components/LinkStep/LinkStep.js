import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LinkStep.scss';

const linkStepClasses = subtle =>
  classNames({
    'link-step': true,
    'link-step--subtle': subtle
  });

const textClasses = (subtle, direction) =>
  classNames({
    'link-step__text': true,
    'link-step__text--subtle': subtle,
    'link-step__text--subtle-back': subtle && direction === 'back'
  });

const iconClasses = direction =>
  classNames({
    'link-step__icon': true,
    'link-step__icon--back': direction === 'back'
  });

const LinkStep = ({ children, to, direction, number, subtle }) => (
  <Link to={to} className={linkStepClasses(subtle)}>
    {/* Should use the icon component here. Toggles between with subtle prop */}
    {!subtle ||
      (direction === 'left' && <div className={iconClasses(direction)} />)}
    <div className={textClasses(subtle, direction)}>
      {number && `Fase ${number}:`} <br /> {children}
    </div>
    {/* Should use the icon component here. Toggles between with subtle prop */}
    {subtle && direction === 'right' && (
      <div className={iconClasses(direction)} />
    )}
  </Link>
);

LinkStep.propTypes = {
  to: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['back', 'next']).isRequired,
  number: PropTypes.number,
  subtle: PropTypes.bool
};

export default LinkStep;
