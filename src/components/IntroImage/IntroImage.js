import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './IntroImage.scss';

const IntroImage = ({ src, alt, description }) => (
  <div className="intro-image" role="presentation">
    <img
      src={src}
      alt={alt}
      className="img-wide"
      aria-describedby="intro-image-description"
    />
    {description && (
      <div id="intro-image-description" className="intro-image__description">
        <div className="intro-image__icon">
          <Icon type="arrowround" rotate={270} size="huge" />
        </div>
        <span className="intro-image__description-text">{alt}</span>
      </div>
    )}
  </div>
);

IntroImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.bool
};

export default IntroImage;
