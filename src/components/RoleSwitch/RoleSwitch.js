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

  const RoleLink = ({ currentRole, currentPath, children }) => {
    // If active - return non clickable link
    if (role === currentRole) {
      // eslint-disable-next-line
      return <a className={linkClasses(role === currentRole)}>{children}</a>;
    }

    return (
      <Link
        className={linkClasses(role === currentRole)}
        to={currentPath}
        onClick={e => {
          e.preventDefault();
          // Use localStorage to remember selected role + check if this is client or server render
          if (typeof window !== 'undefined') {
            localStorage && localStorage.setItem('role', currentRole);
          }
          navigate(currentPath, {
            state: { noScroll: true }
          });
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="role-switch">
      <RoleLink currentRole="utbygger" currentPath={pathUtbygger}>
        Utbygger
      </RoleLink>
      <RoleLink currentRole="entreprenor" currentPath={pathEntreprenor}>
        Entreprenør
      </RoleLink>
    </div>
  );
};

export default RoleSwitch;

RoleSwitch.propTypes = {
  role: PropTypes.string.isRequired,
  stage: PropTypes.string.isRequired,
  stepSlug: PropTypes.string.isRequired
};
