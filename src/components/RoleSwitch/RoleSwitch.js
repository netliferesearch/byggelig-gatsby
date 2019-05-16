import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './RoleSwitch.scss';

const RoleSwitch = ({ role, stage, stepSlug }) => {
  // Create paths
  const path = `/${stage}/${stepSlug}`;
  const pathEntreprenor = `${path}/entreprenor`;
  const pathUtbygger = `${path}/utbygger/`;

  return (
    <div className="role-switch">
      <p>
        <Link to={pathEntreprenor} className="role-switch__link">
          Entreprenør
        </Link>
        <Link to={pathUtbygger} className="role-switch__link">
          Utbygger
        </Link>
      </p>
    </div>
  );
};

export default RoleSwitch;

RoleSwitch.propTypes = {
  role: PropTypes.string.isRequired,
  stage: PropTypes.string.isRequired,
  stepSlug: PropTypes.string.isRequired
};
