import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RoleSwitch.scss';

const RoleSwitch = ({ role, stage, stepSlug }) => {
  // Create paths
  const path = `/${stage}/${stepSlug}`;
  const pathEntreprenor = `${path}/entreprenor`;
  const pathUtbygger = `${path}/utbygger/`;

  const linkClasses = active =>
    classNames({
      link: true,
      'role-switch__link': true,
      'role-switch__link--active': active
    });

  return (
    <div className="role-switch">
      <Link
        to={pathEntreprenor}
        className={linkClasses(role === 'entreprenor')}
      >
        Entreprenør
      </Link>
      <Link to={pathUtbygger} className={linkClasses(role === 'utbygger')}>
        Utbygger
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
