import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './LinkBlock.scss';

import Icon from '../Icon';

const LinkBlock = ({ children, to }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <Link to={to} className="link-block">
        {children}
        <div className="link-block__icon">
          <Icon type="arrow" size="small" />
        </div>
      </Link>
    );
  }

  return (
    <a href={to} className="link-block">
      {children}
      <div className="link-block__icon">
        <Icon type="arrow" size="small" />
      </div>
    </a>
  );
};

LinkBlock.propTypes = {
  to: PropTypes.string.isRequired,
  external: PropTypes.bool
};

export default LinkBlock;
