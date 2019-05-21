import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import './Hero.scss';

const Hero = ({ data }) => {
  const { title = '', body = '', image = {} } = data.sanityPage;
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text-content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__text">{body}</p>
        </div>
        <img src={image.asset.url} alt="" className="hero__image" />
      </div>
    </section>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      {
        sanityPage {
          title
          body
          image {
            asset {
              url
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} />}
  />
);

Hero.propTypes = {
  data: PropTypes.shape({
    sanityPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
