import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import './Header.scss';

const Header = ({ data }) => {
  const { siteName = '', mainSubHeading = '' } = data.sanitySettings;
  const [hideHome, setHideHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') setHideHome(true);
  }, []);

  return (
    <header className="header">
      <div className="wrap-outer">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col">
              <Link to="/" className="header__title">
                {siteName}
              </Link>
            </div>
            <div className="col">
              <nav className="header__nav">
                {!hideHome && (
                  <Link to="/" className="link link--white">
                    Alle fasene
                  </Link>
                )}
              </nav>
            </div>
            <div className="col d-none d-md-block">
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
