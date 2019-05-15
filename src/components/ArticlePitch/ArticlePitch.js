import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LinkBlock from '../LinkBlock';
import './ArticlePitch.scss';

const textContentClasses = subtle =>
  classNames({
    'article-pitch__text-content': true,
    'article-pitch__text-content--subtle': subtle
  });

const titleClasses = subtle =>
  classNames({
    'article-pitch__title': true,
    'article-pitch__title--subtle': subtle
  });

const linkClasses = subtle =>
  classNames({
    'article-pitch__link': true,
    'article-pitch__link--subtle': subtle
  });

const ArticlePitch = ({ title, intro, to, imageUrl, imageAlt, subtle }) => (
  <section className="article-pitch">
    <div className="row">
      <div className={imageUrl ? 'col-md-6' : 'col-md-12'}>
        <div className={textContentClasses(subtle)}>
          <h2 className={titleClasses(subtle)}>{title}</h2>
          <p className="article-pitch__intro">{intro}</p>
          <div className={linkClasses(subtle)}>
            <LinkBlock to={to}>Slik fikk de det til</LinkBlock>
          </div>
        </div>
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
