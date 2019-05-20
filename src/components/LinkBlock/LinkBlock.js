import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './LinkBlock.scss';

import Icon from '../Icon';

const LinkBlock = ({ children, to }) => (
  <Link to={to} className="link-block">
    {children}
    <div className="link-block__icon">
      <Icon type="arrow" size="small" />
    </div>
  </Link>
);

LinkBlock.propTypes = {
  to: PropTypes.string.isRequired
};

export default LinkBlock;
