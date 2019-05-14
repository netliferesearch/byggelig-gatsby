import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import './Header.scss';

const Header = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  return (
    <header className="header">
      <div className="wrap-outer">
        <div className="row align-center">
          <div className="col-sm">
            <div className="h2">
              <Link to="/" className="header__title">
                {title}
              </Link>
            </div>
          </div>
          <div className="col-sm">
            <div className="header__description">{description}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
