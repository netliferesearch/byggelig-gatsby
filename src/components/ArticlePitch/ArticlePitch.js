import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LinkBlock from '../LinkBlock';
import './ArticlePitch.scss';

const articlePitchClasses = subtle =>
  classNames({
    'article-pitch': true,
    'article-pitch--subtle': subtle
  });

const titleClasses = subtle =>
  classNames({
    'article-pitch__title': true,
    'article-pitch__title--subtle': subtle
  });

const ArticlePitch = ({ title, intro, to, imageUrl, imageAlt, subtle }) => (
  <section className={articlePitchClasses(subtle)}>
    <div className="row">
      <div className={imageUrl ? 'col-md-6' : 'col-md-12'}>
        <h2 className={titleClasses(subtle)}>{title}</h2>
        <p className="article-pitch__intro">{intro}</p>
        <LinkBlock to={to}>Slik fikk de det til</LinkBlock>
      </div>
      {imageUrl && (
        <div className="col-md-6">
          <img src={imageUrl} alt={imageAlt} className="article-pitch__image" />
        </div>
      )}
    </div>
  </section>
);

ArticlePitch.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  to: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  subtle: PropTypes.bool
};

export default ArticlePitch;
