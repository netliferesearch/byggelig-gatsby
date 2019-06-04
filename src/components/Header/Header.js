import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import './Header.scss';

const Header = ({ data }) => {
  const { siteName = '', mainSubHeading = '' } = data.sanitySettings;
  return (
    <header className="header">
      <div className="wrap-outer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <Link to="/" className="header__title">
                {siteName}
              </Link>
            </div>
            <div className="col-4">
              <nav className="header__nav">
                <Link to="/" className="link link--white">
                  Alle fasene
                </Link>
              </nav>
            </div>
            <div className="col-4 d-none d-md-block">
              <div className="header__description">{mainSubHeading}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      {
        sanitySettings {
          siteName
          mainSubHeading
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);

Header.propTypes = {
  data: PropTypes.shape({
    sanitySettings: PropTypes.shape({
      siteName: PropTypes.string.isRequired,
      mainSubHeading: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
