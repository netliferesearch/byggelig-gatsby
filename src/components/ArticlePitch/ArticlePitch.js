import React from 'react';
import PropTypes from 'prop-types';

import LinkBlock from '../LinkBlock';
import './ArticlePitch.scss';

const ArticlePitch = ({
  title,
  intro,
  to,
  imageUrl,
  imageAlt,
  subtle,
  linkText
}) => (
  <section className="article-pitch">
    {subtle ? (
      <>
        <div className="article-pitch__text-content article-pitch__text-content--subtle">
          <div className="wrap-outer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h2>
                    <div className="article-pitch__subtitle article-pitch__subtitle--subtle">
                      Eksempel på bruk av beste praksis
                    </div>
                    <div className="article-pitch__title article-pitch__title--subtle">
                      {title}
                    </div>
                  </h2>
                  <p className="article-pitch__intro">{intro}</p>
                  <div className="article-pitch__link article-pitch__link--subtle">
                    <LinkBlock to={to}>{linkText}</LinkBlock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className="row">
        <div className={imageUrl ? 'col-md-6' : 'col-md-12'}>
          <div className="article-pitch__text-content">
            <h2>
              <div className="article-pitch__subtitle">
                Eksempel på bruk av beste praksis
              </div>
              <div className="article-pitch__title">{title}</div>
            </h2>
            <p className="article-pitch__intro">{intro}</p>
            <div className="article-pitch__link">
              <LinkBlock to={to}>{linkText}</LinkBlock>
            </div>
          </div>
        </div>
        {imageUrl && (
          <div className="col-md-6">
            <div
              className="article-pitch__image"
              role="img"
              style={{ backgroundImage: `url(${imageUrl})` }}
              aria-label={imageAlt}
            />
          </div>
        )}
      </div>
    )}
  </section>
);

ArticlePitch.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  to: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  subtle: PropTypes.bool,
  linkText: PropTypes.string
};

export default ArticlePitch;
