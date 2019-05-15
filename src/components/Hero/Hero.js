import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import './Hero.scss';

const Hero = ({ data }) => {
  const { title = '', body = '', image = {} } = data.sanityPage;
  return (
    <div className="hero">
      <div className="row">
        <div className="col-sm-8 order-2 order-sm-1">
          <h2 className="hero__title">{title}</h2>
          <p className="hero__text">{body}</p>
        </div>
        <div className="col-sm-4 order-1 order-sm-2 text-sm-right">
          <img src={image.asset.url} alt="" className="hero__image" />
        </div>
      </div>
    </div>
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
