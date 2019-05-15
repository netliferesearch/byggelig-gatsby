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
          <div className="row align-center">
            <div className="col-sm-auto">
              <div className="h2">
                <Link to="/" className="header__title">
                  {siteName}
                </Link>
              </div>
            </div>
            <div className="col">
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
      query Sanity {
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
      mainSub: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
