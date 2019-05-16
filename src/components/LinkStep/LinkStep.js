import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './LinkStep.scss';

const linkStepClasses = (subtle, direction) =>
  classNames({
    'link-step': true,
    'link-step--subtle': subtle,
    'link-step--subtle-back': subtle && direction === 'back'
  });

const textClasses = (subtle, direction) =>
  classNames({
    'link-step__text': true,
    'link-step__text--subtle': subtle,
    'link-step__text--subtle-back': subtle && direction === 'back'
  });

const iconClasses = subtle =>
  classNames({
    'link-step__icon': true,
    'link-step__icon--subtle': subtle
  });

const LinkStep = ({ children, to, direction, number, subtle }) => (
  <Link to={to} className={linkStepClasses(subtle, direction)}>
    <div className={iconClasses(subtle)}>
      <Icon
        mirror={direction === 'back'}
        type={subtle ? 'arrow' : 'arrowround'}
      />
    </div>
    <div className={textClasses(subtle, direction)}>
      {number && `Fase ${number}:`} <br /> {children}
    </div>
  </Link>
);

LinkStep.propTypes = {
  to: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['back', 'next']).isRequired,
  number: PropTypes.number,
  subtle: PropTypes.bool
};

export default LinkStep;
