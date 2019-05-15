import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './LinkEntry.scss';

const LinkEntry = ({ children, to, icon }) => (
  <Link to={to} className="link-entry">
    {/* Should use the icon component here, above the text */}
    {icon && <div className="link-entry__icon" />}
    {children}
  </Link>
);

LinkEntry.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default LinkEntry;
