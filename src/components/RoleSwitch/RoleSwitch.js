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
        to={pathUtbygger}
        onClick={e => {
          e.preventDefault();
          navigate(pathUtbygger, {
            state: { noScroll: true }
          });
        }}
      >
        Utbygger
      </Link>
      <Link
        className={linkClasses(role === 'entreprenor')}
        to={pathEntreprenor}
        onClick={e => {
          e.preventDefault();
          navigate(pathEntreprenor, {
            state: { noScroll: true }
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
