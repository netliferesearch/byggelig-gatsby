import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './LinkBlock.scss';

const LinkBlock = ({ children, to }) => (
  <Link to={to} className="link-block">
    {children}
  </Link>
);

LinkBlock.propTypes = {
  to: PropTypes.string.isRequired
};

export default LinkBlock;
