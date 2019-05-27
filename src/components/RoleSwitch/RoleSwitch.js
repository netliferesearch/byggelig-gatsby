import React from 'react';
import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RoleSwitch.scss';

const RoleSwitch = ({ role, stage, stepSlug }) => {
  // Create paths
  const path = `/${stage}/${stepSlug}`;
  const pathUtbygger = `${path}/utbygger/`;
  const pathEntreprenor = `${path}/entreprenor`;

  const linkClasses = active =>
    classNames({
      'role-switch__link': true,
      'role-switch__link--active': active
    });

  return (
    <div className="role-switch">
      <Link
        className={linkClasses(role === 'utbygger')}
        onClick={e => {
          e.preventDefault();
          const scrollY = window.scrollY || 0;
          navigate(pathUtbygger, {
            state: { scrollPosition: scrollY }
          });
        }}
      >
        Utbygger
      </Link>
      <Link
        className={linkClasses(role === 'entreprenor')}
        onClick={e => {
          e.preventDefault();
          const scrollY = window.scrollY;
          navigate(pathEntreprenor, {
            state: { scrollPosition: scrollY }
          });
        }}
      >
        Entreprenør
      </Link>
    </div>
  );
};

export default RoleSwitch;

RoleSwitch.propTypes = {
  role: PropTypes.string.isRequired,
  stage: PropTypes.string.isRequired,
  stepSlug: PropTypes.string.isRequired
};
