/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import '../styles/main.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">
      <div className="row">
        <div className="col-md-8">{children}</div>
      </div>
    </main>
    <footer>Footer</footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
