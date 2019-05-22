import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import './Hero.scss';

const Hero = ({ data }) => {
  const { title = '', body = '', image = {} } = data.sanityPage;
  return (
    <section className="hero">
      <div className="wrap-outer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1">
              <h1 className="h2">{title}</h1>
              <p className="hero__text">{body}</p>
            </div>
            <div className="col-md-4 col-4 offset-md-0 offset-4 order-1 order-md-2 center md-right">
              <img src={image.asset.url} alt="" />
            </div>
          </div>
        </div>
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
