import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';

import './IntroImage.scss';

const imageClasses = bleed =>
  classNames({
    imgWide: true,
    'imgWide--bleed': bleed
  });

const IntroImage = ({ src, alt, description, bleed }) => (
  <div className="intro-image" role="presentation">
    <img
      src={src}
      alt={alt}
      className={imageClasses(bleed)}
      aria-describedby="intro-image-description"
    />
    {description && (
      <div id="intro-image-description" className="intro-image__description">
        <div className="intro-image__icon">
          <Icon type="arrowround" rotate={270} size="big" />
        </div>
        <span className="intro-image__description-text">{alt}</span>
      </div>
    )}
  </div>
);

IntroImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.bool,
  bleed: PropTypes.bool
};

export default IntroImage;
