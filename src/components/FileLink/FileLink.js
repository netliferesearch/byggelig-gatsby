import React from 'react';
import PropTypes from 'prop-types';

import './FileLink.scss';

const FileLink = ({ href, children }) => <a href={href}>{children}</a>;

FileLink.propTypes = {
  href: PropTypes.string
};

export default FileLink;
