import React from 'react';
import { Link } from 'gatsby';
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
      <Link to={pathUtbygger} className={linkClasses(role === 'utbygger')}>
        Utbygger
      </Link>
      <Link
        to={pathEntreprenor}
        className={linkClasses(role === 'entreprenør')}
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
